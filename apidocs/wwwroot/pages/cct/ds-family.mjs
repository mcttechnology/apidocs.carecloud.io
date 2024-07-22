import { ref, provide, onMounted } from "vue"
import {dsgrid, fetchDS, fetch_agency_DS} from "./data.mjs"
export default {
    components: {
        dsgrid,
    },
    setup() {
        const ds = ref([])
        const children = ref([])
        const csi_children = ref([])
        const csi_family = ref([])
        // const client = useClient()
        provide('ds', ds)
        provide('children', children)
        provide('csi_children', csi_children)
        onMounted(async () => {
            ds.value = await fetchDS('ds_QueryFamilyView.json');
            children.value = await fetchDS('ds_QueryChildren.json');
            
            csi_children.value = await fetch_agency_DS('ds_csi.json', 'QueryChildren');
            csi_family.value = await fetch_agency_DS('ds_csi.json', 'QueryFamilyView');
        })
        return {  ds, children }
    }
}
