import React from 'react'

type Props = {}

const CategoryFillter = (props: Props) => {
    return (
        <div>
            <form className="w-full">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                    <li>
                        <a href="#" className="block px-2 py-3"> Totes </a>
                    </li>
                    <li>
                        <a href="#" className="block px-2 py-3"> Backpacks </a>
                    </li>
                    <li>
                        <a href="#" className="block px-2 py-3"> Travel Bags </a>
                    </li>
                    <li>
                        <a href="#" className="block px-2 py-3"> Hip Bags </a>
                    </li>
                    <li>
                        <a href="#" className="block px-2 py-3"> Laptop Sleeves </a>
                    </li>
                </ul>
            </form>

        </div>
    )
}

export default CategoryFillter