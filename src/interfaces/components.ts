import { ReactNode } from "react"

export interface I_Service{
    title: string,
    description: string,
    imageUrl?: string,
    alt?: string,
    backgroundColor?: string
    icon?: ReactNode
}