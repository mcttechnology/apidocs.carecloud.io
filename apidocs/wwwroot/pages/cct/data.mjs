import { inject } from "vue"
export async function fetchDS(file) {
    const res = await fetch('/pages/cct/' + file);
    const result = await (res).json()
    const fields = result.SystemSettings.Data[1].Items[0].DataSourceField;
    return fields.filter(f =>  f.Description?.length > 0);
}

export async function fetch_agency_DS(file, code) {
    const res = await fetch('/pages/cct/' + file);
    const result = await (res).json()
    const ds = result.SystemSettings.Data[1].Items.find(i => i.Item.Code === code);
    return ds.DataSourceField.filter(f =>  f.Description?.length > 0);
}

export const dsgrid = {
    props: {
        dataSource: {
            type: Array,
            required: false
        }
    },
    template: `
        <DataGrid :items="resolvedDataSource" class="max-w-screen-md" :tableStyle="['fullWidth','stripedRows','uppercaseHeadings']"
                  selected-columns="code,name,description,type">
            <template #description="{ Description }">
                <p :style="{ width: '200px', wordWrap: 'break-word', whiteSpace: 'normal' }"> {{ Description }}</p> 
            </template>
        </DataGrid>`,
    setup(props) {
        const injectedDs = inject('ds');
        const resolvedDataSource =  props.dataSource || injectedDs;
        return { resolvedDataSource };
    }
}
