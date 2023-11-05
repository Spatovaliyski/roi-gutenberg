/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const updateEgress = (event) => {
		setAttributes( { egress: event.target.value } )
	}

	const updateCost = (event) => {
		setAttributes( { cost: event.target.value } )
	}

	return (
		<div { ...useBlockProps() }>
			<div className="roi-data">
				<span>Your</span>
				<input className="roi-data__input--members" type="number" value="5" disabled />
				<span>team members are managing</span>
				<input className="roi-data__input--storage" type="number" value="1" disabled />
				<span>TBs storage.</span>
			</div>
			
			<div className="roi-result">
				<span>Filespace Advanced will cost</span>
				<span className="roi-result__field">
					<i>$</i>
					<input type="number" value={attributes.cost} onChange={updateCost} className="roi-result__field--disabled roi-result__field--cost" />
				</span>
				<span>per month. </span>
				<br/>
				<span>Egress savings will be:</span>
				<span className="roi-result__field">
					<i>$</i>
					<input type="number" value={attributes.egress} onChange={updateEgress} className="roi-result__field--disabled roi-result__field--egress" />
				</span>
				<span>per TB.</span>

				<input type="hidden" value={attributes.egress} id="roi-static-egress" />
				<input type="hidden" value={attributes.cost} id="roi-static-cost" />
			</div>
		</div>
	);
}
