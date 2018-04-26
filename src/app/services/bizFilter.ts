export class BizFilter {
    private m_label: string;
    private m_propertyName: string;
    private m_operator: string;
    private m_propertyValue: any;
    private m_automatic: boolean;
    private m_levels: string;
    private m_dataMap: string;
    private m_items: any;

    constructor(propertyName: string, operator: string, propertyValue: any, levels: string) {
        this.propertyName = propertyName;
        this.operator = operator;
        this.propertyValue = propertyValue;
        this.automatic = false;
        this.levels = levels;
    }

    get label(): string {
        return this.m_label;
    }

    set label(value: string) {
        this.m_label = value;
    }

    get propertyName(): string {
        return this.m_propertyName;
    }

    set propertyName(value: string) {
        this.m_propertyName = value;
    }

    get operator(): string {
        return this.m_operator;
    }

    set operator(value: string) {
        this.m_operator = value;
    }

    get propertyValue(): any {
        return this.m_propertyValue;
    }

    set propertyValue(value: any) {
        this.m_propertyValue = value;
    }

    get automatic(): boolean {
        return this.m_automatic;
    }

    set automatic(value: boolean) {
        this.m_automatic = value;
    }

    get levels(): string {
        return this.m_levels;
    }

    set levels(value: string) {
        this.m_levels = value;
    }

    get dataMap(): string {
        return this.m_dataMap;
    }

    set dataMap(value: string) {
        this.m_dataMap = value;
    }

    get isCombo(): boolean {
        return (this.dataMap != null);
    }

    setLayout(label: string) {
        this.label = label;
    }
}
