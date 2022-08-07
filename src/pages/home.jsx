import React, {Component} from 'react';
import {getList,add,edit,delete1} from "../api/things"
import { Space, Table, Tag , Button, Tooltip} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import "../css/table.css"
const { Column, ColumnGroup } = Table;
class Home extends Component {
    state={
        data:[],
        columns :[
            {
                title: '姓名',
                dataIndex: 'name',
                align:'center',
                key: 'name',
            },
            {
                title: '班级',
                dataIndex: 'price',
                align:'center',
                key: 'price',
            },
            {
                title: '学号',
                dataIndex: 'num',
                align:'center',
                key: 'num',
            },
            {
                title: '年龄',
                dataIndex: 'address',
                align:'center',
                key: 'address',
            },{
                title: '操作',
                align:'center',
                key: 'id',
                render: (_, record) => (
                    <Space size="middle">
                     <button onClick={this.del.bind(this,record.id)}>删除</button>
                    </Space>
                ),
            },
        ],
        data1:[]
    }

    getList1(){
        getList().then(res=>{
            console.log(res)
            this.setState({
                data1:res.data
            })
        })
    }
    del(id) {
        delete1({id: id}).then(res => {
        })
        this.getList1()
    }
    addThing(){
        let params={
            name:document.getElementById("item1").value,
            price:document.getElementById("item2").value,
            num:document.getElementById("item3").value,
            address:document.getElementById("item4").value,
        }
        add(params).then(res=>{
        })
        // history.go(0)
    }
    componentDidMount(){
        this.getList1()
    }
    render() {
        return (
            <div>
                <div className='add'>
                    <input type="text" placeholder="输入姓名" id="item1" className="ii"/>
                    <input type="text" placeholder="输入班级" id="item2" className="ii"/>
                    <input type="text" placeholder="输入学号" id="item3" className="ii"/>
                    <input type="text" placeholder="输入年龄" id="item4" className="ii"/>
                    <button onClick={this.addThing}>添加</button>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data1} pagination={false} />

            </div>

            // <div>
            //
            //     <table cellspacing="1px" >
            //
            //         <thead>
            //         <tr>
            //             <td>－</td>
            //             <td>姓名</td>
            //             <td>班级</td>
            //             <td>学号</td>
            //             <td>年龄</td>
            //         </tr>
            //         </thead>
            //         <tbody>
            //         {
            //             this.state.data.map(x=>{
            //                 return(
            //                     <tr key={x.id}>
            //                         <th>
            //                             <Button type="primary" icon={<CloseOutlined />} onClick={this.del.bind(this,x.id)}>
            //                             </Button>
            //                         </th>
            //                         <th>{x.name}</th>
            //                         <th>{x.price}</th>
            //                         <th>{x.num}</th>
            //                         <th>{x.address}</th>
            //
            //                     </tr>
            //                 )
            //             })
            //         }
            //         </tbody>
            //
            //     </table>
            //     <div className='add'>
            //         <input type="text" placeholder="输入姓名" id="item1" className="ii"/>
            //         <input type="text" placeholder="输入班级" id="item2" className="ii"/>
            //         <input type="text" placeholder="输入学号" id="item3" className="ii"/>
            //         <input type="text" placeholder="输入年龄" id="item4" className="ii"/>
            //         <button onClick={this.addThing}>添加</button>
            //     </div>
            //
            // </div>
        );
    }
}

export default Home;
