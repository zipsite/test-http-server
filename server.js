export default {
	'/handler/': function({get}) {
        console.log('hhhhh');
		return ParseInt(get.one) + ParseInt(get.two);
	}
}