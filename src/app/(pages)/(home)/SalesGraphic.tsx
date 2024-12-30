
import Graphic from './Graphic'
import { getOrders } from '@/app/utils/api'

const SalesGraphic =async () => {
    const data=await getOrders();
    console.log(data)
  return (
    <div className='mt-10 bg-white rounded-lg p-5'>
        <h2 className="font-semibold text-lg">Satış Detayları</h2>
        <Graphic data={data}/>
    </div>
  )
}

export default SalesGraphic