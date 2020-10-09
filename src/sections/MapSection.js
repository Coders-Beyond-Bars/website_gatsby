import React from "react"

import { Grid } from "@material-ui/core"

import Section from "components/Section"
import AddressMap from "components/AddressMap"

const MapSection = props => (
    <Section>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>

            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <AddressMap />
            </Grid>
        </Grid>
    </Section>
)

export default MapSection
