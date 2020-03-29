import React, { useState } from 'react'
import { Box, Heading, CheckBox, Image, Text } from 'grommet'

interface Props {
    deliveryName: string
    deliveryIcon: string
    deliveryDate: Date
    deliveryCost: number
    orderTotalCost: number
}
export default function Shipping(props: Props) {
    const [checked, setChecked] = useState(false);
    const onChange = (event: { target: { checked: any } }) => setChecked(event.target.checked);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return (
        <Box>
            <Box pad={{ left: 'small' }} direction='row-responsive'>
                <Heading margin='none' level={3}>{props.deliveryName}</Heading>
            </Box>
            <Box direction='row' wrap={true} align='center' justify='start'>
                <Box direction='row' wrap={true} align='center'>

                    <Box pad={{ left: 'small' }} direction='row-responsive'>
                        Delivery Date*:
                    <Text margin={{ left: 'xsmall' }} style={{ fontWeight: 800 }} color='brand'>
                            {days[props.deliveryDate.getDay()]} {months[props.deliveryDate.getMonth()]}
                            {props.deliveryDate.getDate()} {props.deliveryDate.getFullYear()}
                        </Text>
                    </Box>
                    <Box pad={{ left: 'small' }} direction='row-responsive' >
                        Shipping Cost:
                        <Text margin={{ left: 'xsmall' }} style={{ fontWeight: 800 }} color='brand'>
                            +{props.deliveryCost} SEK (incl.VAT)
                        </Text>
                    </Box>
                </Box>
                <Box pad={{ left: 'small' }} alignSelf='end' width='xxsmall' height='xxsmall'>
                    <Image fit="cover" style={{ width: '100%', height: '100%' }} src={props.deliveryIcon} />
                </Box>
            </Box>
        </Box>

    )
}
