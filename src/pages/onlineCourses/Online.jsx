import React from 'react'
import { OnlineCourses } from './Online.styles'
import {Button, Title} from '../../style/StyleComponent'

// ? img
// import error from "../../assets/404.png";
import img_1 from "../../assets/frontend.png"; // ? images
import hour from "../../assets/qumsoat.png"; // ? images
import el from "../../assets/el.png"; // ? images

const Online = () => {
  return (
    <OnlineCourses>

     <div className="max-width">
          <div className=" not-found">
            
        <Title className="not-img img-404">

            Online kurslarimizga o`tish uchun pastdagi tugmaga bosing!
        </Title>
            <img className="not-img err_img_1" src={img_1} alt="" />
           
            <img className="not-img err_img_3" src={hour} alt="" />
            <img className="not-img err_img_4" src={el} alt="" />

              <div className="online-but">

               <Button className="online-but">Online kurslar</Button>
               </div>
            {/* <a  href="/" className="back_button online-but">
            </a> */}
          </div>
        </div>
    </OnlineCourses>
  )
}

export default Online
