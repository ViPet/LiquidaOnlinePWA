import {BizFilter} from './bizFilter';
import {BizSorter} from './bizSorter';

export class BizStream {
    private m_filters: BizFilter[];
    private m_sorters: BizSorter[];

    constructor() {
        this.m_filters = [];
        this.m_sorters = [];
    }

    get filters(): BizFilter[] {
        return this.m_filters;
    }

    get sorters(): BizSorter[] {
        return this.m_sorters;
    }

    addFilter(filter: BizFilter) {
        this.m_filters.push(filter);
    }

    removeFilter(filter: BizFilter) {
        const index = this.m_filters.indexOf(filter, 0);
        this.m_filters.splice(index, 1);
    }

    addSorter(sorter: BizSorter) {
        this.m_sorters.push(sorter);
    }

    removeSorter(sorter: BizSorter) {
        const index = this.m_sorters.indexOf(sorter, 0);
        this.m_sorters.splice(index, 1);
    }

    get description(): string {
        let description = '';

        for (const filter of this.filters) {
          if (filter.propertyValue !== '') {
            if (description !== '') {
              description += String.fromCharCode(13);
            }
            description += filter.label + ': ' + filter.propertyValue;
          }
        }
        return description;
    }

    get hasFilters(): boolean {
        return (this.filters.length > 0);
    }

    get hasSorters(): boolean {
        return (this.sorters.length) > 0;
    }
}
