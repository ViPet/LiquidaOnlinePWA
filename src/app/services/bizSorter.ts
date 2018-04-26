export enum SortDirection {
    Ascending = 1,
    Descending = 2
}

export class BizSorter {
    private m_propertyName: string;
    private m_direction: SortDirection;

    constructor(propertyName: string, direction: SortDirection) {
        this.propertyName = propertyName;
        this.direction = direction;
    }

    get propertyName(): string {
        return this.m_propertyName;
    }

    set propertyName(value: string) {
        this.m_propertyName = value;
    }

    get direction(): SortDirection {
        return this.m_direction;
    }

    set direction(value: SortDirection) {
        this.m_direction = value;
    }
}
