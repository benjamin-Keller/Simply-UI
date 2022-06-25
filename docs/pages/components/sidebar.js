export default function sidebar({ children }) {
  return (
    <>
        <div className="col-12-xs col-2-md col-2-lg overflow-y-scroll scrollbar-secondary">
            <div className="w-100">
                <div className="display-f flex-direction-column pb-2">
                    <h4>Introduction</h4>
                    <a href="#" className="text-secondary">Getting Started 
                    <span className="badge-secondary text-white ml-1">WIP</span></a>

                    <a href="download.html" className="text-hover-secondary">Download 
                    <span className="badge-secondary text-white ml-1">WIP</span></a>
                </div>
                <div className="display-f flex-direction-column">
                    <h4>Layout</h4>
                    <a href="../Layout/breakpoints.html" className="text-hover-secondary">Breakpoints 
                    <span className="badge-secondary text-white ml-1">WIP</span></a>

                    <a href="../Layout/grid.html" className="text-hover-secondary">Grid 
                    <span className="badge-secondary text-white ml-1">WIP</span></a>
                </div>
            </div>
        </div>
    </>
  )
}