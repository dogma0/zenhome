import * as React from 'react'
import { List, Slider } from 'antd'
import OfferModalFormPage from './OfferModalFormPage'

const OfferStatusDisplayTrack = () => {
    return (
        <Slider
            min={1}
            max={6}
            marks={{
                1: "Submit offer",
                2: "Our advisor will be in touch very soon to discuss the offer with you",
                3: "Sign the offer online",
                4: "Present offer to seller",
                5: "Wait for seller's response",
                6: "Seller accepts the offer"
            }
            }
            disabled
        />

    )
}

const OfferDescription = () => {
    return (
        <div>
            <OfferStatusDisplayTrack />
            <OfferModalFormPage btnTitle="Edit Offer Content" />
        </div>
    )
}
const OfferList = () => {
    const data = [
        { status: "IN_DRAFT" },
        { status: "PENDING_REVIEW" },
        { status: "REVIEWED" },
        { status: "SUBMITTED" },
        { status: "ACCEPTED" },
    ]

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={"Offer for 123 Yonge st"}
                        description={<OfferDescription />}
                    />
                </List.Item>
            )}
        >
        </List>
    )
}
class TypeFormBinding extends React.Component {
    instance
    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src=require('./typeform_binding.js')
        this.instance.appendChild(s);
    }
    render = () => {
        const bindingHTML : string = require("./typeform_binding.html")
        return (
            <div ref={el => (this.instance = el)}>
                <div
                    className="typeform-widget"
                    data-url="https://frankl1.typeform.com/to/vMmBcW"
                    data-hide-headers="true"
                    data-hide-footer="true"
                    style={{ width: '100%', height: 500 }}
                />
                {/* <script>{()=>{console.log("Script loaded in component"); return <div></div>;}}</script> */}
                <div style={{ fontFamily: 'Sans-Serif', fontSize: 12, color: '#999', opacity: 0.5, paddingTop: 5 }}> </div>
            </div>

            // <div dangerouslySetInnerHTML={{__html: bindingHTML}}></div>
        );
    }
}

export default class Offers extends React.Component {
    render = () => {
        return (
            <div>
                <TypeFormBinding />
                {/* <OfferList /> */}
            </div>
        )
    }
}