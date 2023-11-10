import { useContext } from "react"
import { AnalyticsContext } from "../context/AnalyticsContext"

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
    
  if(!context){
      throw Error('hook should be used inside AnalyticsContextProvider')
  }

  return context;  
}