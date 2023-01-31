
import styles from "../style"

const Hero = () => (
    <section  id='inicio' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1200" className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Transforma tu menú <br className="sm:block hidden"/> {" "}
            <span className="text-white">con nuestro servicio </span> {" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">de creación digital</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Crece tu negocio con un menú digital.</p>
      </div>
  </section>
  )

export default Hero