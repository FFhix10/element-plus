import { ElementUIComponent } from './component'
import { TooltipEffect } from './tooltip'

export type SortOrder = 'ascending' | 'descending'

/** Options to set the default sort column and order */
export interface DefaultSortOptions {
  /** Default sort column */
  prop: string

  /** Default sort order */
  order: SortOrder
}

export interface SummaryMethodParams {
  columns: Record<string, unknown>[]
  data: Record<string, unknown>
}

export interface rowCallbackParams {
  row: Record<string, unknown>
  rowIndex: number
}

export interface cellCallbackParams {
  row: Record<string, unknown>
  rowIndex: number
  column: Record<string, unknown>
  columnIndex: number
}

export interface treeNode {
  rowKey: string | number
  isLeaf: boolean
  level: number
  expanded: boolean
  loaded: boolean
}

/** Table Component */
export declare class ElTable extends ElementUIComponent {
  /** Table data */
  data: Record<string, unknown>[]

  /** Table's height. By default it has an auto height. If its value is a number, the height is measured in pixels; if its value is a string, the height is affected by external styles */
  height: string | number

  /** Table's max-height. The height of the table starts from auto until it reaches the maxHeight limit. The maxHeight is measured in pixels, same as height */
  maxHeight: string | number

  /** Whether table is striped */
  stripe: boolean

  /** Whether table has vertical border */
  border: boolean

  /** Whether width of column automatically fits its container */
  fit: boolean

  /** Whether table header is visible */
  showHeader: boolean

  /** Whether current row is highlighted */
  highlightCurrentRow: boolean

  /** Key of current row, a set only prop */
  currentRowKey: string | number

  /** Whether to lazy load tree structure data, used with load attribute */
  lazy: boolean

  /** Horizontal indentation of nodes in adjacent levels in pixels */
  indent: number

  /** Function that returns custom class names for a row, or a string assigning class names for every row */
  rowClassName: string | ((param: rowCallbackParams) => string)

  /** Function that returns custom style for a row, or an object assigning custom style for every row */
  rowStyle: Record<string, unknown> | ((param: rowCallbackParams) => Record<string, unknown>)

  /** Function that returns custom class names for a cell, or a string assigning class names for every cell */
  cellClassName: string | ((param: cellCallbackParams) => string)

  /** Function that returns custom style for a cell, or an object assigning custom style for every cell */
  cellStyle: Record<string, unknown> | ((param: cellCallbackParams) => Record<string, unknown>)

  /** Function that returns custom class names for a row in table header, or a string assigning class names for every row in table header */
  headerRowClassName: string | ((param: rowCallbackParams) => string)

  /** Function that returns custom style for a row in table header, or an object assigning custom style for every row in table header */
  headerRowStyle: Record<string, unknown> | ((param: rowCallbackParams) => Record<string, unknown>)

  /** Function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header */
  headerCellClassName: string | ((param: cellCallbackParams) => string)

  /** Function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header */
  headerCellStyle: Record<string, unknown> | ((param: cellCallbackParams) => Record<string, unknown>)

  /** Key of row data, used for optimizing rendering. Required if reserve-selection is on */
  rowKey: (row: Record<string, unknown>) => any

  /** Displayed text when data is empty. You can customize this area with `#empty` */
  emptyText: string

  /** Whether expand all rows by default. Only works when the table has a column `type="expand"` */
  defaultExpandAll: boolean

  /** Set expanded rows by this prop. Prop's value is the keys of expand rows, you should set row-key before using this prop */
  expandRowKeys: any[]

  /** Set the default sort column and order */
  defaultSort: DefaultSortOptions

  /** Tooltip effect property */
  tooltipEffect: TooltipEffect

  /** Whether to display a summary row */
  showSummary: boolean

  /** Displayed text for the first column of summary row */
  sumText: string

  /** Custom summary method */
  summaryMethod: (param: SummaryMethodParams) => any[]

  /** Controls the behavior of master checkbox in multi-select tables when only some rows are selected */
  selectOnIndeterminate: boolean

  /** Clear selection. Might be useful when `reserve-selection` is on */
  clearSelection (): void

  /**
   * Toggle or set if a certain row is selected
   *
   * @param row The row that is going to set its selected state
   * @param selected Whether the row is selected. The selected state will be toggled if not set
   */
  toggleRowSelection (row: Record<string, unknown>, selected?: boolean): void

  /**
   * Toggle or set all rows
   */
  toggleAllSelection (): void

  /**
   * Set a certain row as selected
   *
   * @param row The row that is going to set as selected
   */
  setCurrentRow (row?: Record<string, unknown>): void

  /**
   * Toggle or set if a certain row is expanded
   *
   * @param row The row that is going to set its expanded state
   * @param expanded Whether the row is expanded. The expanded state will be toggled if not set
   */
  toggleRowExpansion (row: Record<string, unknown>, expanded?: boolean): void

  /** Clear sort status, reset the table to unsorted  */
  clearSort (): void

  /** Clear filter, reset the table to unfiltered  */
  clearFilter (): void

  /** Relayout the table, maybe needed when change the table or it's ancestors visibility */
  doLayout (): void

  /** Sort Table manually */
  sort (prop: string, order: string): void

  /** method for lazy load subtree data */
  load (row: Record<string, unknown>, treeNode: treeNode, resolve: () => any): void
}
