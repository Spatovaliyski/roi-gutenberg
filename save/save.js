/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const members = document.querySelector('roi-data__input--members');
	const storage = document.querySelector('roi-data__input--storage');

	return (
		<div { ...useBlockProps.save() }>
			<div className="roi-data">
				<span>Your</span>
				<input className="roi-data__input--members" type="number" value="5" min="1" max="10000"/>
				<span>team members are managing</span>
				<input className="roi-data__input--storage" type="number" value="1" min="1" max="50000"/>
				<span>TBs storage.</span>
			</div>
			
			<div className="roi-result">
				<span>Filespace Advanced will cost you</span>
				<span className="roi-result__field--disabled roi-result__field--cost">${attributes.cost}</span>
				<span>per month. You will save</span>
				<span className="roi-result__field--disabled roi-result__field--egress">${attributes.egress}</span>
				<span>from Egress fees.</span>

				<input type="hidden" value={attributes.egress} id="roi-static-egress" />
				<input type="hidden" value={attributes.cost} id="roi-static-cost" />
			</div>

			<div className="roi-links">
				<a href="https://www.example.com/trial" className="roi-links__button--try">Try for free</a>
			</div>
		</div>
	);
}
