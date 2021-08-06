import React from 'react'
import { useHistory } from 'react-router-dom'

const SubHeader = () => {
    const history = useHistory();
    const openSearch = () => {
        history.push('/search-form')
    }
    return (
        <div className="subHeader">
            <div className="phone" onClick={openSearch}>
                <div className="right-input">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search icon" />
                    <input type="text" placeholder='נדל"ן למכירה' />
                </div>
                <div className="left-input">
                    <div>חיפוש</div>
                </div>
            </div>
            <div className="right">
                <div>מכירה</div>
                <div>השכרה</div>
                <div>דירות שותפים</div>
                <div>נדל"ן מסחרי</div>
            </div>
            <div className="left">
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACEklEQVRoge3YO2sUURiA4SfZ4KWxkHgJaC12ioniDYuIYCGIv0bQGKNiIngpLCz0B9iITVAUGytFFFRELAQVxB/gJd6jxbdDNpMNs5tdJjtw3vJ855z53plzHRKJRCKRSJTKwHIn0CnDeIPvmMa65U1n6TzDUdQwiZcqKNOPGfOH1YSKyfTjBn5iKherjEwm8RDb8QJnc3V6XqYf14XEIMZEss1kzuNuqdm1SKPELhxoiDWTqeErVpeVYCvkJSbrZY0MCpmpeuww3peYYyE1xRIZm8RK9huvsa+MBIsYEcn8xQ9sxqjFJVaJOXFTj+30r8RmtwKXxea3dpG6PSsxgG/mv/0LmstkEndwupTs2uSe2A8ayctkEtNCfgTjZSXYKhvFHDmRK89khswNp3PYVo9XSuaSGHrZnOhTUZkBscQ2TuxKyYyb2+w+NKlXCZkNeIAveGv+EaWRPnFU6WkZYqUqojIyrdCHM+I6TBz5x+rllSPJ9Cr5OTOMU+00XgoX8WcJ7Y4XxLMvcwvPcQwf8aSo43ZEtoiTLhzC/TbaNraZxTVxM1wspwk8xU5x9y+8fLUjcgVbxZvqhCM4idsF9fbiE951+LwFPML+LvQzZuHvoY5p9YKzUqwkB7GnoO6MkJ4VR5XRetnVevyx+CLLwm4xZrvBGnzW5Vtiq50NYQf+dem5v7BezIFEIpFIJBKJHP8Be49y+MissakAAAAASUVORK5CYII=" alt="law hammer" />
                    <span>כונס נכסים</span>
                </div>
                <div>
                    <img src="https://img.icons8.com/material-outlined/24/000000/graph.png" alt="graph" />
                    <span>מדד הנדל"ן</span>
                </div>
                <div>
                    <img className="img" src="https://assets.yad2.co.il/yad2site/y2assets/images/logos/yad1/yad1_logo.svg" alt="yad1 logo" />
                    <span>יד1 דירות חדשות</span>
                </div>
                <div>
                    <img className="img" src="https://assets.yad2.co.il/yad2site/y2assets/images/logos/yadata/yadata_logo_black.svg" alt="logo" />
                    <span>הערכת שווי נכס</span>
                </div>
            </div>
        </div>
    )
}

export default SubHeader
