
import { 
    Droplet, WrenchIcon, Radiation, FlameKindling, 
    PenLineIcon, Bath, ShowerHead, Clock,
  } from 'lucide-react';
  
  export interface ServiceType {
    id: number;
    title: string;
    description: string;
    icon: any; // Using 'any' to store the icon component reference
    image: string;
    slug: string;
  }
  
  export const servicesList: ServiceType[] = [
    {
      id: 1,
      title: "Emergency Plumbing Repairs",
      description: "Fast response to all emergency plumbing issues, including burst pipes, leaks, and fixture failures.",
      icon: WrenchIcon,
      image: "/lovable-uploads/emergency.jpg",
      slug: "emergency-plumbing-repairs"
    },
    {
      id: 2,
      title: "Blocked Drain Cleaning",
      description: "Professional removal of blockages in sinks, toilets, showers, and main drainage systems.",
      icon: PenLineIcon,
      image: "/lovable-uploads/drain.png",
      slug: "blocked-drain-cleaning"
    },
    {
      id: 3,
      title: "Water Leak Repairs",
      description: "Detection and repair of visible and hidden water leaks to prevent property damage and water waste.",
      icon: Droplet,
      image: "https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334230.jpg?t=st=1742245177~exp=1742248777~hmac=c3bc85399d2b401c7026c4fd425d875360c2326426d9c6b2d74a402f62bcf331&w=996",
      slug: "water-leak-repairs"
    },
    {
      id: 4,
      title: "Boiler Repairs",
      description: "Expert repair, installation, and maintenance of all types of radiators and heating systems.",
      icon: Radiation,
      image: "https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334227.jpg?t=st=1742245236~exp=1742248836~hmac=1bef076b643196b2f779e52cf55e6b1b4ea06113f8e8ba3103ad965cac6aa5d8&w=996",
      slug: "radiator-repairs"
    },
    {
      id: 5,
      title: "Boiler Repair & Installation",
      description: "Professional installation, repair, and servicing of all boiler types to ensure efficient and safe operation.",
      icon: FlameKindling,
      image: "https://img.freepik.com/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55834.jpg?t=st=1742245280~exp=1742248880~hmac=196e62ab5af064c38cde6b119405a6bd13c7f67e78591e74f696156d033644e6&w=996",
      slug: "boiler-installation-repair"
    },
    {
      id: 6,
      title: "Pipe Repairs & Replacement",
      description: "Expert repair and replacement of damaged, burst, or corroded pipes using high-quality materials.",
      icon: PenLineIcon,
      image: "https://img.freepik.com/free-photo/plumber-assembling-pipe_1098-17772.jpg?t=st=1742245330~exp=1742248930~hmac=b8276909a92e0208159891b0e10240466e858e292c675cbdfe4aa9257f2a594a&w=996",
      slug: "pipe-repairs-replacement"
    },
    {
      id: 7,
      title: "Bathroom & Kitchen Plumbing",
      description: "Installation and repair of all bathroom and kitchen fixtures, including sinks, toilets, showers, and appliances.",
      icon: ShowerHead,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "bathroom-kitchen-plumbing"
    },
    {
      id: 8,
      title: "24/7 Emergency Call-Out",
      description: "Round-the-clock availability for emergencies, ensuring you never have to wait for urgent plumbing assistance.",
      icon: Clock,
      image: "https://img.freepik.com/free-vector/24-hour-everyday-service-sticker-design_1017-38078.jpg?t=st=1742245388~exp=1742248988~hmac=5cea157720c7db9f9761c319de5f650f8a5df2f383b754b71daccbc492d94258&w=826",
      slug: "emergency-call-out"
    }
  ];