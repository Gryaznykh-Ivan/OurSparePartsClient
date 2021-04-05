import React, { useState, useEffect } from 'react'
import useQuery from '../hooks/useQuery'
import { useHistory } from 'react-router-dom'
import { AppState } from '../store';
import { connect } from 'react-redux';
import { getCategories } from '../actions/categories'
import { getManufacturers } from '../actions/manufacturers'
import { CategoryState, ManufacturerState } from '../types/store';

const options = [{ title: 'Дешевые', value: 1 }, { title: 'Дорогие', value: -1 }, { title: 'Новые', value: 0 }];

interface PropsFromState {
    categories: CategoryState,
    manufacturers: ManufacturerState
}

interface PropsFromDispatch {
    getCategories: () => void,
    getManufacturers: () => void
}

type Props = PropsFromState & PropsFromDispatch;

const Filter = ({ categories, manufacturers, getManufacturers, getCategories }: Props) => {
    const history = useHistory();
    const query = useQuery();

    useEffect(() => {
        if (manufacturers.data.length === 0) {
            getManufacturers();
        }

        if (categories.data.length === 0) {
            getCategories();
        }
    }, []);

    const [Filter, setFilter] = useState({
        s: query.get('s'),
        categoryId: Number(query.get('categoryId')) || null,
        manufacturerId: Number(query.get('manufacturerId')) || null,
        minPrice: Number(query.get('minPrice')) || null,
        maxPrice: Number(query.get('maxPrice')) || null,
        sort: Number(query.get('sort')) || null
    });

    const [isFilterOpen, setIsFilterOpen] = useState({
        isPriceOpen: query.has('minPrice') || query.has('maxPrice'),
        isManufacturersOpen: query.has('manufacturerId'),
        isCategoriesOpen: query.has('categoryId'),
        isSortOpen: query.has('sort')
    });

    const changeQueryParams = (name: string, value: string | number) => {
        if (value === '' || value === 0) query.delete(name);
        else query.set(name, value as string);

        history.push({
            pathname: history.location.pathname,
            search: query.toString()
        });
    };

    const onOpenEvent = (name: keyof typeof isFilterOpen) => {
        setIsFilterOpen({ ...isFilterOpen, [name]: !isFilterOpen[name] });
    }

    const onFilterEvent = (name: keyof typeof Filter, value: string | number, flag = false) => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        
        if (Filter[name] === value) {
            value = '';
        }

        setFilter({ ...Filter, [name]: value });

        if (flag) changeQueryParams(name, value);
    };

    return (
        <div className="md:block md:w-64 hidden">
            <div className="sticky top-5 space-y-5">
                <div className="bg-white p-4 rounded-xl">
                    <label className="font-bold text-lg" htmlFor="search">Поиск</label>
                    <input
                        className="mt-1 px-2 py-1 w-full border-gray-200 border-2 rounded-lg text-sm"
                        id="search"
                        type="text"
                        placeholder="Введите название"
                        value={Filter.s || ''}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFilterEvent('s', e.target.value)}
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => changeQueryParams('s', e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === "Enter") e.currentTarget.blur();
                        }}
                    />
                </div>
                <div className="bg-white p-4 rounded-xl">
                    <div className="font-bold text-lg">Фильтры</div>
                    <div className="divide-y-2 divide-gray-100">
                        <div className="py-2">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => onOpenEvent("isPriceOpen")}>
                                <div className="font-bold">Цена</div>
                                <svg className="transform rotate-180" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#9D9D9D" />
                                </svg>
                            </div>
                            <div className={`flex space-x-5 ${isFilterOpen.isPriceOpen ? 'not-hidden' : 'hidden'}`}>
                                <div className="flex flex-col">
                                    <label className="text-sm" htmlFor="input-min">От</label>
                                    <input
                                        className="w-full border-gray-200 border-2 rounded-lg p-1 text-sm"
                                        type="number"
                                        id="input-min"
                                        min="0"
                                        value={Filter.minPrice || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFilterEvent('minPrice', e.target.value)}
                                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => changeQueryParams('minPrice', e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm" htmlFor="input-max">До</label>
                                    <input
                                        className="w-full border-gray-200 border-2 rounded-lg p-1 text-sm"
                                        type="number"
                                        id="input-max"
                                        min="0"
                                        value={Filter.maxPrice || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFilterEvent('maxPrice', e.target.value)}
                                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => changeQueryParams('maxPrice', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => onOpenEvent("isSortOpen")}>
                                <div className="font-bold">Сортировка</div>
                                <svg className="transform rotate-180" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#9D9D9D" />
                                </svg>
                            </div>
                            <div className={`not-hidden space-y-1 my-2 ${isFilterOpen.isSortOpen ? 'not-hidden' : 'hidden'}`}>
                                {options.map((option) => (
                                    <div className="flex items-center" key={option.value}>
                                        <input
                                            className="cursor-pointer tick appearance-none w-5 h-5 border-gray-200 border-2 rounded-md checked:bg-red checked:border-transparent focus:outline-none"
                                            type="checkbox"
                                            checked={Filter.sort === option.value}
                                            onChange={() => onFilterEvent('sort', option.value, true)}
                                        />
                                        <div className="ml-3">{option.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => onOpenEvent("isManufacturersOpen")}>
                                <div className="font-bold">Производитель</div>
                                <svg className="transform rotate-180" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#9D9D9D" />
                                </svg>
                            </div>
                            <div className={`not-hidden space-y-1 my-2 ${isFilterOpen.isManufacturersOpen ? 'not-hidden' : 'hidden'}`}>
                                {manufacturers.isLoading && "Загрузка..."}
                                {manufacturers.data.map((manufacturer) => (
                                    <div className="flex items-center" key={manufacturer.manufacturerId}>
                                        <input
                                            className="cursor-pointer tick appearance-none w-5 h-5 border-gray-200 border-2 rounded-md checked:bg-red checked:border-transparent focus:outline-none"
                                            type="checkbox"
                                            checked={Filter.manufacturerId === manufacturer.manufacturerId}
                                            onChange={() => onFilterEvent('manufacturerId', manufacturer.manufacturerId, true)}
                                        />
                                        <div className="ml-3">{manufacturer.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => onOpenEvent("isCategoriesOpen")}>
                                <div className="font-bold">Категория</div>
                                <svg className="transform rotate-180" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#9D9D9D" />
                                </svg>
                            </div>
                            <div className={`not-hidden space-y-1 my-2 ${isFilterOpen.isCategoriesOpen ? 'not-hidden' : 'hidden'}`}>
                                {categories.isLoading && "Загрузка..."}
                                {categories.data.map((category) => (
                                    <div className="flex items-center" key={category.categoryId}>
                                        <input
                                            className="cursor-pointer tick appearance-none w-5 h-5 border-gray-200 border-2 rounded-md checked:bg-red checked:border-transparent focus:outline-none"
                                            type="checkbox"
                                            checked={Filter.categoryId === category.categoryId}
                                            onChange={() => onFilterEvent('categoryId', category.categoryId, true)}
                                        />
                                        <div className="ml-3">{category.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    categories: state.categories,
    manufacturers: state.manufacturers
})

export default connect(mapStateToProps, { getCategories, getManufacturers })(Filter);