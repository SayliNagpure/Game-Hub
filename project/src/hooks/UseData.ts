import { useEffect, useState } from "react"
import apiClient from "../Services/api.client"
import { AxiosRequestConfig, CanceledError } from "axios"



interface FeatchResponce<T>{
    count:number,
results:T[]
}

const useData=<T>(endPoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{

    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FeatchResponce<T>>(endPoint, { signal: controller.signal,...requestConfig })
            .then(res => {
                setIsLoading(false)
                setData(res.data.results)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setIsLoading(false)
                setError(err.message)
            })
    }, deps?[...deps]:[])

    return { data, error, isLoading }
}

export default useData