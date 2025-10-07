// src/pages/Impact.tsx
import React from 'react';
import "../components/CSS/Impact.css"
import { useTranslation } from 'react-i18next';
// import { Parallax } from 'react-scroll-parallax';



// const MyComponent = () => {
//   return (
//     <Parallax translateX={[-20, 20]} >
//       <div className="impact-body">
//       <div className="impact-circle">

//       </div>
//       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio mi, 
//       eget luctus ex auctor id. Curabitur fringilla nunc eget lacus hendrerit dictum. 
//       Nunc vitae ex sit amet nisl placerat molestie.Cras vehicula tellus felis, facilisis 
//       congue enim facilisis sit amet. Vestibulum auctor ex nibh. Nam convallis nulla gravida 
//       est convallis, luctus congue turpis lacinia. Aliquam erat volutpat."</p>
//       </div>
//     </Parallax>
//   );
// };

// const MyComponentRight = () => {
//   return (
//     <Parallax translateX={[0, -20]} >
//      <div className="impact-rcont">
//       <div className="impact-body impact-right">
//         <div className="imrigrid">
//       <div className="impact-circle">

//       </div>
//       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio mi, 
//       eget luctus ex auctor id. Curabitur fringilla nunc eget lacus hendrerit dictum. 
//       Nunc vitae ex sit amet nisl placerat molestie.Cras vehicula tellus felis, facilisis 
//       congue enim facilisis sit amet. Vestibulum auctor ex nibh. Nam convallis nulla gravida 
//       est convallis, luctus congue turpis lacinia. Aliquam erat volutpat."</p>
//       </div>
//       </div> 
//       </div>
//     </Parallax>
//   );
// };


const Impact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="impact-container">
    <div className="impact-hero">
      <div className="impact-head">
        <h1>{t("Impacttitle")}</h1>
        <div className="impact-tag">
          <p>
          {t("ImpactParagraph")}
          </p>
        </div>
      </div>
     </div>
     {/* <MyComponent/>
     <MyComponentRight/>
     <MyComponent/>
     <MyComponentRight/> */}
     <div className="impact-content">
        <div className="impact-section-head">
          <h3>{t("Whatwedo")}</h3>
        </div>
        <div className="impact-section-body">
          <p>{t("Aboutparagraph3")}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Impact;
