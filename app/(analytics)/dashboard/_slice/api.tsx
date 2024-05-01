"use client"
import axios from '@/Utils/constants'


export const dashData = async () => {
      try {
            const response = await axios.get('/dashboard')
            console.log(response.data)
      } catch (error) {
            console.error(error)
      }
}