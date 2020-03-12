import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Link,
    Container,
    Header,
    Menu,
    MenuItem,
    Submenu,
    Main,Row,Col,Card,Table,TableColumn,Pagination,Breadcrumb,BreadcrumbItem,DatePicker
} from 'element-ui'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Link)
Vue.use(Container)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(mavonEditor)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(DatePicker)


Vue.prototype.$message = Message
