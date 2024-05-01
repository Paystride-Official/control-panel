import axios from '@/Utils/constants'
import { Dashboard } from '@/components/Icons/Icons';
import { createContext,useContext, useState } from "react";


const MainContext = createContext<null | any>({})

interface Dashboard {
      transaction: number,
      merchant: number,
      failed_settlement: number,
      profit_percentage : number,
      profit: number,
      today_transaction: number
}

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
      const [dashboard,setDashboard] = useState<Dashboard | null >()
      const dashData: any = async () => {
      try  {
            const response  = await axios.get('/dashboard')
            console.log(response.data)
            setDashboard(response.data)
      } catch (error) {
            console.error(error)
      }
}
      return (
            <MainContext.Provider value={{ dashData,dashboard }}>
                  {children}
            </MainContext.Provider>
      )
}

export const useMainContext = () => useContext(MainContext);