import './Nav.css';

export default function Nav() {

  return (
    <div className="Nav">
       <input className="w-full border pl-8 pr-2 py-1 rounded-full focus:border-purple-200 focus:shadow-outline outline-none" 
               type="text" placeholder="Search..." />
    </div>
  );
}