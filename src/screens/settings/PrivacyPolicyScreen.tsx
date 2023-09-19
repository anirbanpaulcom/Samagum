import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import SettingsHeader from './container/SettingsHeader'
import { Container } from '../../components/Wrapper'
import MText from '../../components/Text'
import CustomScroll from '../../components/CustomScroll'

export default function PrivacyPolicyScreen() {
    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='Privacy policy' />

            <CustomScroll>
                <View style={{ padding: 20 }}>
                    <MText style={styles.title}>1. Types data we collect</MText>

                    <MText style={styles.subTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </MText>
                    <MText />
                    <MText style={styles.subTitle}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </MText>
                </View>

                <View style={{ padding: 20 }}>
                    <MText style={styles.title}>2. Use of your personal data</MText>

                    <MText style={styles.subTitle}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
                    </MText>
                    <MText />
                    <MText style={styles.subTitle}>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </MText>
                </View>

                <View style={{ padding: 20 }}>
                    <MText style={styles.title}>3. Disclosure of your personal data</MText>

                    <MText style={styles.subTitle}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </MText>
                    <MText />
                    <MText style={styles.subTitle}>
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                    </MText>
                    <MText />
                    <MText style={styles.subTitle}>
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
                    </MText>
                </View>
            </CustomScroll>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000000"
    },
    subTitle: {
        color: "#000000"
    }
})