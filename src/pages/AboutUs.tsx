import React from 'react'

import Table, { TableRow } from '../components/Table'

import map from '../assets/map.jpg'

const data: Array<TableRow> = [{
    key: "Фамилия",
    value: "Иван"
},
{
    key: "Имя",
    value: "Иван"
},
{
    key: "Телефон",
    value: "+79963226559"
}];


export default function AboutUs() {
    return (
        <div className="container m-auto py-5">
            <div className="font-bold text-4xl mb-2">О компании</div>
            <div className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, obcaecati numquam voluptatibus nam eius quasi debitis esse modi, porro ipsum ad deserunt non sint provident illo in natus quaerat aspernatur accusamus labore ea. Minus, qui itaque? Perspiciatis assumenda voluptatibus similique deleniti temporibus dicta eligendi incidunt aliquid eum, sed nihil sit.
                <br /><br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sit fuga, voluptatem placeat dolorem tempore libero tenetur, labore modi recusandae nesciunt repellat rerum excepturi reprehenderit nostrum exercitationem dignissimos ab? Veniam minima accusamus in alias, unde sapiente, veritatis necessitatibus voluptate distinctio commodi ducimus autem porro repellendus quos! Hic, voluptatem architecto, ipsum, nobis ipsa impedit eum illum nostrum tenetur dolorem officiis? Reprehenderit commodi quam voluptates quisquam laboriosam sequi vero maiores adipisci modi quas esse, harum architecto blanditiis magni! Magnam omnis quis quod corporis minus! Voluptatem voluptatum esse, iure dolor exercitationem cumque? Impedit quae sed perspiciatis. Minima aperiam recusandae velit eveniet sit quisquam.
                <br /><br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis architecto quasi a delectus eum! Saepe rem sapiente tempore dicta. In, ipsum ullam culpa voluptas cumque atque voluptatem officiis aliquam at sapiente. Autem exercitationem accusamus ducimus dolor ut natus perferendis praesentium, delectus quo consequatur, a, iusto maxime deleniti obcaecati laborum quod enim amet accusantium voluptatum neque explicabo veritatis! Vero cupiditate laboriosam velit reprehenderit dolore consequatur sequi error, voluptate ipsa quia atque a ipsum iure mollitia! Inventore tempore tempora minima, eveniet veritatis voluptas debitis voluptatem officia, cum facere architecto alias sequi sit. Excepturi consequuntur quod harum quaerat voluptatum alias libero molestiae explicabo delectus ipsam asperiores autem quas dolores minima, saepe reprehenderit quisquam atque blanditiis ab in inventore amet quia nemo hic! Error architecto officia, quidem reiciendis officiis quis quisquam veniam, magni non, debitis voluptas at quasi impedit blanditiis ipsum! Ipsum placeat eos, voluptate veniam sit architecto quidem explicabo laudantium temporibus. Asperiores, iste!
            </div>
            <div className="font-bold text-4xl my-5">Контактная информация</div>
            <div className="bg-white rounded-xl p-5 flex md:flex-row flex-col-reverse space-y-reverse md:space-y-0 space-y-5 pt-4">
                <div className="flex flex-col flex-1">
                    <div className="px-2 flex-1">
                        <Table data={data} />
                    </div>
                </div>
                <img className="lg:w-1/2 md:w-7/12 md:ml-5 self-center" src={map} alt="" />
            </div>
        </div>
    )
}
