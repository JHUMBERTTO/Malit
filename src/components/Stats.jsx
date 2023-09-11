import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row sm:mb-15 `}>
    {stats.map((stat) => (
      <div key={stat.id} className='flex-1 flex items-center '>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black'>{stat.value}</h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-orange-500 uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats
