<script>
    import {onMount} from 'svelte';
    import {Input, InputWrapper, Button, Flex, Center, Grid, Group, Space, RadioGroup} from '@svelteuidev/core';
    import {Person} from "radix-icons-svelte";
    import Template from "../../component/MainCompenent.svelte"
import FooterBar from "../../component/Footer.svelte"



    let scrollY = 0;

    const items = [
        {label: 'Svelte', value: 'svelte'},
        {label: 'React', value: 'react'},
        {label: 'Vue', value: 'vue'},
        {label: 'Angular', value: 'angular'},
        {label: 'Solid', value: 'solid'}
    ];

    let value = 'svelte';

    onMount(async () => {
        document.title = 'LETMEIN: Smart Living and Workplace Platform';
    });

</script>

<Template>
    <Space h={30}/>
    <Grid>

        <Grid.Col span={4}></Grid.Col>
        <Grid.Col span={4}>

            <Flex justify="center" gap="md" direction="column">
                <InputWrapper id='input-demo' label="Credit card information"
                              description="Please enter your credit card information, we need some money"
                              error="Your credit card expired">
                    <Input placeholder='Write here the information'/>
                </InputWrapper>
                <Input icon={Person}
                       placeholder="Enter Username"
                />
                <Input icon={Person}
                       placeholder="Enter Username"
                />
                <Input icon={Person}
                       placeholder="Enter Username"
                />

                <RadioGroup {items} bind:value/>

                <Button color='blue' ripple>Click me!</Button>
            </Flex>
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>
    </Grid>
</Template>
