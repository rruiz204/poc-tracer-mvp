export interface Specification<Filters, Order> {
  toOrder?(): Order;
  toFilters?(): Filters;
};