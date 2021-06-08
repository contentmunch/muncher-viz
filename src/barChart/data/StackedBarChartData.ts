export interface StackedBarChartData {
    titleField: string;
    stackFields: string[];
    values: FieldValue[];
}

export interface FieldValue {
    [id: string]: number | string;
}