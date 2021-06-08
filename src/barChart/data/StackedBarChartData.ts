export interface StackedBarChartData {
    titleField: string;
    totalField:string;
    stackFields: string[];
    values: FieldValue[];
}

export interface FieldValue {
    [id: string]: number | string;
}