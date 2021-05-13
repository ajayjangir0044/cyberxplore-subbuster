import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import {Table,Input,Spin,Button} from 'antd'
import moment from 'moment';
const {Search}=Input
const Find=({history})=>{
    
    const searchParams=new URLSearchParams(useLocation().search);

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [searchValue,setSearchValue]=useState('');
    
    useEffect(()=>{
        loadResult()
    },[])

    const loadResult = async()=>{
        setLoading(true)
        const query=searchParams.get("domain")
        await axios.get(`https://subbuster.cyberxplore.com/api/find?domain=${query}`)
        .then(async(res)=>
        {
            await setLoading(false)
            setData(res.data.data)
        })
        .catch(err=>console.log(err))
    }
    const handleSearch=e=>setSearchValue(e.target.value)

    const searched = (keyword) => (d) => {
        return (
          d.subdomain.toLowerCase().includes(keyword) 
        );
      };

    let dataSource=data && data.filter(searched(searchValue.toLowerCase())).map((d,i) => {
        return {
          key: d._id,
          subdomain: d.subdomain,
          ip: d.ip,
          statuscode: d.statuscode,
          sNo:i+1,
          lastupdated:moment(d.updatedon).format('MMMM Do YYYY, h:mm:ss a')
        };
      });
      const columns = [
        {
          title: 'S.No',
          dataIndex:'sNo',
          key:'sNo'
        },
        {
          title: 'Sub-Domain',
          dataIndex: 'subdomain',
          key: 'subdomain',
        },
        {
          title: 'Ip Address',
          dataIndex: 'ip',
          key: 'ip',
        },
        {
          title: 'Status code',
          dataIndex: 'statuscode',
          key: 'statuscode',
        },
        {
          title: 'Last updated on',
          dataIndex: 'lastupdated',
          key: 'lastupdated',
        },
      ];
    return (
        <>
            <Spin tip="Loading..." spinning={loading}>
            <div className="container mt-3">
                <h3>Search in subdomains</h3>
                <div className="container mt-3 mb-3" style={{padding:0}}>
                    <div className="row justify-content-between" style={{justifyContent: 'space-between !important'}}>
                        <div className="col-4">
                        <Search
                            placeholder="Enter subdomain to find"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onChange={handleSearch}
                            // className="searchBox"
                            />
                    
                        </div>
                        <div className="col-4 "><Button block type="primary" onClick={()=>history.push('/')}  size="large">Bust More domains</Button></div>
                    </div>
                </div>
                <Table dataSource={dataSource} columns={columns} pagination={true} />
            </div> 
            </Spin>
        </> 
    )
}
export default Find