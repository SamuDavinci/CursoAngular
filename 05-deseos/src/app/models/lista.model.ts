import { ListaItem } from './lista-item.model';

export class Lista {

    id: number
    title: string
    makeAt: Date
    finishAt: Date
    done: boolean
    items: ListaItem[]

    constructor (title: string) {

        this.title = title
        this.makeAt = new Date()
        this.done = false
        this.items = []
        this.id = new Date().getTime()

    }

}