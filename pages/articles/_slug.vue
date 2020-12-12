<template>
  <div>
    <div class="container-title">
    	<h1 class="text-5xl font-semibold">{{ story.title }}</h1>
    	<h2 class="text-2xl text-gray-700">{{ story.author }}</h2>
    	<p class="text-xl text-gray-700">{{ story.date }}</p>
    </div>
    <div>
    	<div v-for="content in story.contents" :key="content.index" class="">
    		<div v-if="content.heading" class="px-20 mb-10 text-3xl text-center font-semibold">{{ content.heading }}</div>
    		<div v-if="content.text" class="px-20 mb-10 text-xl">{{ content.text }}</div>
    		<div v-if="content.image" class="px-20 mb-10 w-3/4 mx-auto flex justify-center"><img :src="content.image"/></div>
    		<div v-if="content.sider" class="mb-10">
    			<client-only>
    				<SideRside :content="content.sider" />
    			</client-only>
    		</div>
    		<div v-if="content.sidel" class="mb-10">
    			<client-only>
    				<SideLside :content="content.sidel" />
    			</client-only>
    		</div>
    		<div v-if="content.overlay" class="mb-10">
    			<client-only>
    				<Overlay :content="content.overlay" />
    			</client-only>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
const story = {
	title: 'Kimi No Nawa',
	author: 'Makoto Shinkai',
	date: 'Dec 12, 2020',
	contents: [
		{heading: 'Plot'},
		{text: "In the opening, a comet fragment is seen falling through the layers of clouds in the sky. It appears to fall on the town below it but that is left ambiguous as it cuts to the two main characters, Taki and Mitsuha, talking about how they feel as if they are missing something (Yume Tōrō), and that the feeling had lingered since the day that 'The stars came falling... It was nothing more, nothing less than a beautiful view.'"},
		{sider: {
			pic: "https://pixelz.cc/wp-content/uploads/2018/12/kimi-no-na-wa-mitsuha-miyamizu-portrait-uhd-4k-wallpaper-768x432.jpg",
			texts: [
				"Mitsuha Miyamizu, a high school girl living in the fictional town of Itomori in Gifu Prefecture's mountainous Hida region, is told by multiple of the people around her that she acted strangely the previous day, while noting that she is normal today.",
				"That night, she performs a ritual for her grandmother which is scorned by her classmates.",
				"Frustrated at her boring and close-knit life, she screams out on the shrine steps that 'I hate this place! I hate this life! Please make me a handsome Tokyo boy in my next life!' much to her sister, Yotsuha's dismay."
			]	
		}},
		{text: "The next day, she wakes up in an unfamiliar place, realizing that she is in the body of a boy called Taki Tachibana. Leaving the house, she realizes that she has ended up in Tokyo, as if her dream had actually come true. She enjoys her time in his body, but only half-heartedly attempts to retain Taki's reputation, as she believes it is all just a 'very realistic dream.'"},
		{sidel: {
			pic: "https://m.media-amazon.com/images/M/MV5BN2M1MGRmMTMtYmRhMi00OWU3LTkzNTQtYzhhNjFjZjAxZDk5XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
			texts: [
				"Taki returns to his own body, upon which he is continuously shocked by the changes Mitsuha has made, from leaving a 'thanks to my feminine powers' memo in his electronic diary to fixing his crush and coworker, Miki Okudera's, skirt with threads.",
				"At the same time, Mitsuha finds that back in Itomori, Taki got angry at several of her classmates after mocking Mitsuha (which he took to be an insult to himself) and channeled his anger by kicking down a desk in the classroom",
				"Both, shocked, flip through their books and notes, and come to the same conclusion: That in their dreams, they are switching bodies."
			]
		}},
		{overlay: {
			pic: "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUIqIj4FZnA18dTr8JmadSVg0oIQlM5-B0a9qyExno5DaTVA34z3yszT9CDifyljc1GXs67vHrT3iKYk5yt6sa9YBrD7.jpg?r=275",
			texts: [
				"Through a series of rushed cutscenes (Zen Zen Zense), it is shown that Taki and Mitsuha start communicating with each other by leaving notes on paper or leaving memos in each other's phones.",
				"Both continually voice their frustrations with one another, first, with Mitsuha telling Taki to 'watch the skirt', after which Taki tells Mitsuha to stop wasting his money at cafes, which she rebutts that it's his body that's eating and that she's working too.",
				"Mitsuha helps Taki develop a relationship with Miki, which he tells her to stop changing his relationships, soon after which Mitsuha frantically asks him why a girl is in love with her.",
				"He replies that she is more popular when he is in her body, where she tells him 'Don't be so full of yourself - not like you have a girlfriend!' after which Taki points out she doesn't have a boyfriend.",
				"The sequence ends with them both comically writing on their faces, and saying, 'I'm single because I want to be!'"
			]
		}},
		{image: "https://resizing.flixster.com/q3jYDLHDPrLFil2z4I43MLvAAzU=/740x380/v1.bjsxNTc1NTkwO2o7MTg2NDg7MTIwMDs5NjA7NTQw"},
		{image: "https://pbs.twimg.com/media/ERTzUe-WsAM4q2p.jpg"},
		{image: "https://cdn.myanimelist.net/s/common/uploaded_files/1539652479-c3125b79f8d130a36f763f0af99b077e.jpeg"}
	]
}

export default {
	data() {
		return {
			story: story
		}
	}
}
</script>

<style>
.container-title {
	@apply px-20 pt-20 mb-20 text-center;
}


</style>
