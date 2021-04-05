import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories';
import { AppState } from '../store';
import { Category, CategoryState } from '../types/store';

//import intro from '../assets/intro.jpg'

import CatalogCard from '../components/CatalogCard'

interface PropsFromState {
    categories: CategoryState
}

interface PropsFromDispatch {
    getCategories: () => void,
}

type Props = PropsFromState & PropsFromDispatch;

const Index = ({ categories, getCategories }: Props) => {
    useEffect(() => {
        if (categories.data.length === 0) {
            getCategories();
        }
    }, []);

    return (
        <div className="">
            <img className="w-full" src="https://цфмр.рф/wp-content/uploads/2020/05/basketbol_myach_basketbolnoe_pole_120082_2560x1080-2560x500.jpg" alt=""/>
            <div className="container m-auto py-5">
                <div className="flex justify-between items-center px-2">
                    <div className="text-4xl font-bold">Каталог</div>
                    <div className="text-gray-600 text-sm">Всего каталогов: { categories.data.length }</div>
                </div>
                <div className="bg-white rounded-xl mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 sm:p-8 p-4 justify-items-center grid-cols-2 gap-2">
                    { categories.data.map((category: Category) => <CatalogCard key={ category.categoryId } categoryId={ category.categoryId } title={ category.title } imageUrl={ category.imageUrl } />) }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    categories: state.categories
})

export default connect(mapStateToProps, { getCategories })(Index)
