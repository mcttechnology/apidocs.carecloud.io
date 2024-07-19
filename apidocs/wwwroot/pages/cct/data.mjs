import { inject } from "vue"
export async function fetchDS(file) {
    const res = await fetch('/pages/cct/' + file);
    const result = await (res).json()
    const fields = result.SystemSettings.Data[1].Items[0].DataSourceField;
    return fields.filter(f =>  f.Description?.length > 0);
}

export const dsgrid = {
    template:`<DataGrid :items="ds" class="max-w-screen-md" :tableStyle="['fullWidth','stripedRows','uppercaseHeadings']"
              selected-columns="code,name,description,type"
               >
        <template #description="{ Description }">
          <p :style="{ width: '200px', wordWrap: 'break-word', whiteSpace: 'normal' }"> {{ Description }}</p> 
        </template>
    </DataGrid>`,
    setup() {
        const ds = inject('ds')
        return { ds }
    }
}
