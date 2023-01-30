import 'animate.css';
import styles from "../style"

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className=" animate__backInDown flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
            La siguiente<br className="sm:block hidden"/> {" "}
            <span className="animate__backInDown text-black">Generacion</span> {" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full">de ofrecer un menu en Mexico.</h1>
        <p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>Precio accesible, calidad y 100% confiables</p>
      </div>
  </section>
  )

export default Hero