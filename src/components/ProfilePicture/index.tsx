import './profilepicture.scss'
import Image from 'next/image'
const Profile = () => {
    return(
        <div className='profilepicture'>
            <Image src="/LogoImg/profilpicture.jpg" alt="profil pictrure" height={50} width={50} className='profilepicture__img'/>

        </div>
    )
}

export default Profile