import Image from "next/image"
import './formSideContent.scss'
const FormSideContent = () => {
    return(
        <div className="sidFormImageComponent">
            <div className="sidFormImageComponent__imgComponent1">
                <Image src="/RecipePopularImg/menu10.png" alt="food image"  height={200} width={200}/>
            </div>
            <div className="sidFormImageComponent__imgComponent2">
                <Image src="/RecipePopularImg/menu11.png" alt="food image" height={200} width={200} />
            </div>
            <div className="sidFormImageComponent__imgComponent3">
                <Image src="/RecipePopularImg/menu13.png" alt="food image" height={200} width={200}/>
            </div>

        </div>
    )
}

export default FormSideContent