const applications = [
    {
        image: "/images/vayu.webp",
        title: "Aerial Survey",
    },
    {
        image: "/images/vayu.webp",
        title: "Traffic Management",
    },
    {
        image: "/images/vayu.webp",
        title: "Aerial Inspection",
    },
    {
        image: "/images/vayu.webp",
        title: "Forest Monitoring",
    },
    {
        image: "/images/vayu.webp",
        title: "Mining Survey",
    },
    {
        image: "/images/vayu.webp",
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
    <div className="px-10 my-4 text-white text-center">
        <h1>Applications</h1>
        <div className="grid md:grid-cols-3 p-4 md:max-w-5xl md:mx-auto text-sm lg:text-base">{applications.map((item, index) => (
            <div className="px-10 relative" key={index}>
                <div className="h-full"><img src={item.image} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2">{item.title}</div>
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default ApplicationsSection