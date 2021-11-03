import { useFilters } from "../filters.context"
import { Category } from "./Category";


export const Categories = () => {
    const { categories } = useFilters();

    return (
        <div className="container">
            <div className="selector">
                {Object.entries(categories).map(([title, data]) => (
                    <Category key={title} title={title} types={data} />
                ))}
            </div>
        </div>
    )
}