
export const TableHeaders =[
    {
        id: 1,
        name: "Name"
    },
    {
        id: 2,
        name: "Health"
    },
    {
        id: 3,
        name: "Location"
    },
    {
        id: 4,
        name: "Recorder"
    },
    {
        id: 5,
        name: "Tasks"
    },
    {
        id: 6,
        name: "Status"
    },
    {
        id: 7,
        name: "Actions"
    }
]

export const TableData=[
    {id:1, name:{name1:"Camera1",color:"success",icon:true},health:{health1:'B',health2:"A"}, location:{value:"newyork",label:"New York City,NY"}, recorder:"New York Recorder",tasks:"3 Tasks",status:'Active',action: "disable"},
    {id:2, name:{name1:"Camera2",color:"success",icon:false},health:{health1:'C',health2:"A"}, location:{value:"newyork",label:"New York City,NY"}, recorder:"New York Recorder",tasks:"5 Tasks",status:'Active',action: "disable"},
    {id:3, name:{name1:"Camera3",color:"error",icon:false},health:{health1:'-',health2:"-"}, location:{value:'losangeles',label:"Los Angeles, CA"}, recorder:"Los Angeles Recorder",tasks:"5 Tasks",status:'Active',action: "disable"},
    {id:4, name:{name1:"Camera4",color:"success",icon:false},health:{health1:'A',health2:""}, location:{value:'franciscsan',label:"San Francisco, CA"}, recorder:"San Francisco Recorder",tasks:"N/A",status:'InActive',action: "enable"},
    {id:5, name:{name1:"Camera5",color:"success",icon:false},health:{health1:'A',health2:"A"}, location:{value:'chicago',label:"Chicago IL"}, recorder:"N/A",tasks:"2 Tasks",status:'Active',action: "disable"},
    {id:6, name:{name1:"Camera6",color:"success",icon:false},health:{health1:'B',health2:"A"}, location:{ value:'miami' ,label:"Miami FL"}, recorder:"Miami Recorder",tasks:"N/A",status:'Active',action: "disable"},
    {id:7, name:{name1:"Camera7",color:"success",icon:false},health:{health1:'B',health2:"A"}, location:{ value: 'miami',label:"Miami FL"}, recorder:"Miami Recorder",tasks:"2 Tasks",status:'Active',action: "disable"},
    {id:8, name:{name1:"Camera8",color:"success",icon:true},health:{health1:'B',health2:""}, location:{value:"seattle",label:"Seattle, WA"}, recorder:"Seattle Recorder",tasks:"N/A",status:'InActive',action: "disable"},
    {id:9, name:{name1:"Camera9",color:"success",icon:false},health:{health1:'B',health2:"A"}, location:{value:'sandiege',label:"San Diege,CA"}, recorder:"N/A",tasks:"4 Tasks",status:'Active',action: "disable"},
    {id:10, name:{name1:"Camera10",color:"success",icon:false},health:{health1:'B',health2:"A"}, location:{value: 'boston', label:"Boston MA"}, recorder:"N/A",tasks:"2 Tasks",status:'Active',action: "disable"}
]

export const AllCameraLocations=[
    {id:0,value:"allLocation",label:"All" },
    {id:1,value:"newyork",label:"New York City,NY" },
    {id:2,value:"losangeles",label:"Los Angeles, CA" },
    {id:3,value:"franciscsan",label:"San Francisco, CA" },
    {id:4,value:"miami",label:"Miami FL" },
    {id:5,value:"sandiege",label:"San Diege,CA" },
    {id:6,value:"chicago",label:"Chicago IL" },
    {id:7,value:"seattle",label:"Seattle, WA" },
    {id:8,value:"boston",label:"Boston MA" }
]

export const AllCameraStatus=[
    {id:0,value:"all",label:'All'},
    {id:1,value:"active",label:'Active'},
    {id:2,value:"inactive",label:"InActive"}
]
