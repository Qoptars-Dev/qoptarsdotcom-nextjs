const applications = [
    {
        image: "/images/aerialsurvey.png",
        title: "Aerial Survey",
    },
    {
        image: "/images/traffic-m.png",
        title: "Traffic Management",
    },
    {
        image: "/images/aerialinspection.png",
        title: "Aerial Inspection",
    },
    {
        image: "/images/forest.png",
        title: "Forest Monitoring",
    },
    {
        image: "/images/mining.png",
        title: "Mining Survey",
    },
    {
        image: "/images/train.png",
        title: "Railway Survey",
    },
    // {
    //     image: "/images/vayu.webp",
    //     title: "Disaster Management",
    // },
    // {
    //     image: "/images/vayu.webp",
    //     title: "Pipeline Survey",
    // },
    // {
    //     image: "/images/vayu.webp",
    //     title: "Railway Survey",
    // },
  ];
  
function ApplicationsSection() {
  return (
    <div className="p-10 my-4 text-center 2xl:pt-12">
        <h1 className="text-3xl 2xl:text-5xl 2xl:pb-10 uppercase font-Mont">Applications</h1>
        <div className="grid md:grid-cols-3 p-4 md:max-w-5xl md:mx-auto gap-6">{applications.map((item, index) => (
            <div className="relative" key={index}>
                <div className="h-full"><img src={item.image} alt={item.title}/>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-slate-50">{item.title}</div>
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default ApplicationsSection