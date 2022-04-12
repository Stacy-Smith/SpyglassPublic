export class Goal {
    goalId?: number
    title: string
    description: string
    picture?: Blob
    targetDate: Date
    targetAmount: number
    userContribution: any
    secondContribution: any
    currentAmount?: number
    active: boolean
    progress?: number

    constructor() {}
}
