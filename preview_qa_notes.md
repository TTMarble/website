# Preview QA Notes

The first visual preview shows that the hero section loads correctly with the custom generated marble kitchen image. The dark low-key background provides sufficient contrast for the ivory and brass typography. The navigation, logo treatment, and call-to-action buttons align with the selected **Monolithic Editorial Luxury** direction.

The first scroll confirms that the craft process section is visible and coherent. The asymmetric layout works well: a large serif headline and inspection image sit on the left, while process cards occupy the right. The section communicates sourcing, templating, modelling, 3D cutting, finishing, and installation in a premium rather than trade-like tone.

No immediate broken images or invisible text issues were observed in the hero or craft section during the first pass.

The technology section presents the generated CNC factory image clearly and reinforces the precision message. The image and copy balance well on desktop, with the factory image on the left and capability tiles on the right. The dark background, brass labels, and slim border treatments remain consistent with the luxury editorial direction.

The transition into the project range section is readable and visually strong. The large serif type creates the intended architecture-portfolio feeling, while the supporting copy addresses developers, architects, interior designers, builders, and owners. The sticky navigation remains visible and functional during scrolling.

The lower project card section looks aligned with the luxury target audience. The commercial lobby and residential kitchen visuals are distinct, high-quality, and not reused as placeholders. The card hierarchy is readable, with clear separation between commercial and luxury residential audiences. The image brightness is low-key, so ivory text remains appropriate and visible.

The final enquiry section is readable and consistent with the premium tone. The form fields, labels, select menu, textarea, and brass submit button maintain sufficient contrast against the dark background. The footer appears clean and restrained. The current form is intentionally static in this frontend-only prototype and should later be connected to an email, CRM, or backend workflow if lead capture is required.


## About and credentials section QA — 2026-05-02

The updated About section displays correctly in the live preview. The navigation includes the new About anchor, and the section presents three editable team member cards for Director / Project Lead, Factory Manager, and Installation Lead. The visual treatment remains consistent with the Monolithic Editorial Luxury design: dark background, ivory typography, brass icon accents, fine borders, and restrained spacing.

The Business Details block appears below the team member area and provides clear placeholders for trade licence, ABN, factory address, mobile, email, and service area. The credentials cards are readable, aligned with the brand style, and positioned before the enquiry form so clients can verify practical business details before contacting the company.


## Clickable proof-point bar QA — 2026-05-02

The 01 / 02 / 03 / 04 proof-point bar has been converted from static summary text into accessible section navigation. The live preview exposes each proof point as a link with clear labels: Natural marble focus, 3D machine precision, End-to-end project team, and Commercial & residential. A test click on **02 3D machine precision** correctly navigated to the Technology section using the `#technology` anchor, while preserving the luxury editorial visual treatment.


## Mobile Menu Mockup QA — 2026-05-02

A standalone mockup image was created at `/home/ubuntu/tt_marble_website/mobile_menu_mockup.png` to show the proposed mobile navigation without modifying the live website. The mockup shows two states: a closed mobile header with the TT Marble identity and a clear Menu control, and an opened full-screen dark overlay with large editorial section titles, supporting labels, brass accents, and a dedicated enquiry action. The design makes clear that the 01/02/03/04 proof strip should not function as the mobile menu; the mobile header should have its own explicit navigation affordance.
