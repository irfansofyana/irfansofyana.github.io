import tomllib

from tinyhtml import html, h, frag, raw


with open("data.toml", "rb") as f:
    data = tomllib.load(f)
    sections = frag(
        h("div", klass="section")(
            h("hgroup")(
                h("div", klass="section-header")(
                    h("svg",
                      klass="section-icon",
                      xmlns="http://www.w3.org/2000/svg",
                      width="24",
                      height="24",
                      viewBox="0 0 24 24",
                      fill="none",
                      stroke="currentColor",
                      **{"stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round"}
                    )(
                        # Knowledge Hub icon
                        raw("""<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>""") if section["title"] == "Knowledge Hub"
                        # Professional Journey icon
                        else raw("""<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>""") if section["title"] == "Professional Journey"
                        # Connect With Me icon
                        else raw("""<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>""")
                    ),
                    h("h3")(section.get("title")),
                ),
                h("p")(section.get("description")),
            ),
            h(
                "div",
                klass="items",
                style=f"flex-direction: {section.get('direction', 'column')}",
            )(
                h(
                    "div",
                    klass="item",
                    style=f"width: {'100%' if section.get('direction', 'column') == 'column' else 'unset'}",
                )(
                    h(
                        "a",
                        role="button",
                        klass=f"{'outline' if section.get('item_style', 'outline') == 'outline' else ''}",
                        href=item.get("url"),
                        target="_blank",
                    )(
                        h("div", klass="button-content")(
                            h("svg",
                              klass="button-icon",
                              xmlns="http://www.w3.org/2000/svg",
                              width="20",
                              height="20",
                              viewBox="0 0 24 24",
                              fill="none",
                              stroke="currentColor",
                              **{"stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round"}
                            )(
                                # Email icon
                                raw("""<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>""") if "mailto:" in item.get("url", "")
                                # LinkedIn icon
                                else raw("""<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>""") if "linkedin" in item.get("url", "")
                                # GitHub icon
                                else raw("""<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>""") if "github" in item.get("url", "")
                                # Instagram icon
                                else raw("""<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>""") if "instagram" in item.get("url", "")
                                # Facebook icon
                                else raw("""<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>""") if "facebook" in item.get("url", "")
                                # Default icon for Digital Garden and Portfolio
                                else raw("""<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>""")
                            ),
                            h("hgroup")(
                                h("h4")(item.get("title")),
                                h("h5")(item.get("description")) if item.get("description") else None,
                            ),
                        ),
                    ),
                )
                for item in section["items"]
            ),
        )
        for section in data["sections"]
    )

    meta_tags = frag(
        h("title")(data.get("name")),
        h("link", rel="icon", type="image/svg+xml", href="img/favicon.svg"),
        h("meta", name="description", content=data.get("description")),
        h("meta", name="keywords", content=data.get("keywords")),
        h("meta", name="viewport", content="width=device-width, initial-scale=1"),
        h("meta", charset="utf-8"),
        # OG
        h("meta", property="og:title", content=data.get("name")),
        h("meta", property="og:description", content=data.get("description")),
        h(
            "meta",
            property="og:image",
            content=f"{data.get('base_url')}/img/{data.get('image')}",
        ),
        # Twitter / X
        h("meta", name="twitter:title", content=data.get("name")),
        h("meta", name="twitter:description", content=data.get("description")),
        h(
            "meta",
            name="twitter:image",
            content=f"{data.get('base_url')}/img/{data.get('image')}",
        ),
        h("meta", name="twitter:card", content="summary_large_image"),
    )

    head = frag(
        h("head")(
            meta_tags,
            h("link", rel="stylesheet", href="css/pico.min.css"),
            h("link", rel="stylesheet", href="css/style.css"),
            h("style", rel="stylesheet")(
                f"""
                    [data-theme="dark"], [data-theme="light"] {{
                        --primary: {data.get("primary_color", "#546e7a")} !important;
                    }}
                    * {{
                        text-align: {data.get("text_align", "center")};
                    }}
                """
            ),
            raw("""
                <script>
                    function toggleTheme() {
                        const html = document.documentElement;
                        const currentTheme = html.getAttribute('data-theme');
                        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                        html.setAttribute('data-theme', newTheme);
                        localStorage.setItem('theme', newTheme);
                    }

                    // Initialize theme from localStorage or default
                    document.addEventListener('DOMContentLoaded', () => {
                        const savedTheme = localStorage.getItem('theme');
                        if (savedTheme) {
                            document.documentElement.setAttribute('data-theme', savedTheme);
                        }
                    });
                </script>
            """),
            raw(
                f"""
                    <!-- Google tag (gtag.js) -->
                    <script async src="https://www.googletagmanager.com/gtag/js?id={data.get("gtag_id")}"></script>
                    <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){{dataLayer.push(arguments);}}
                    gtag('js', new Date());

                    gtag('config', '{data.get("gtag_id")}');
                    </script>
                """
            )
            if data.get("gtag_id")
            else None,
        ),
    )

    header = frag(
        h("header", klass="container")(
            h("button", 
              id="theme-toggle",
              klass="theme-toggle",
              onclick="toggleTheme()",
              **{"aria-label": "Toggle theme"}
            )(
                h("div", klass="theme-toggle-track")(
                    h("div", klass="theme-toggle-track-inner"),
                    h("div", klass="theme-toggle-handle")(
                        h("svg", 
                          klass="theme-toggle-sun",
                          xmlns="http://www.w3.org/2000/svg", 
                          width="16", 
                          height="16", 
                          viewBox="0 0 24 24", 
                          fill="none", 
                          stroke="currentColor", 
                          **{"stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round"}
                        )(
                            h("circle", cx="12", cy="12", r="5"),
                            h("line", x1="12", y1="1", x2="12", y2="3"),
                            h("line", x1="12", y1="21", x2="12", y2="23"),
                            h("line", x1="4.22", y1="4.22", x2="5.64", y2="5.64"),
                            h("line", x1="18.36", y1="18.36", x2="19.78", y2="19.78"),
                            h("line", x1="1", y1="12", x2="3", y2="12"),
                            h("line", x1="21", y1="12", x2="23", y2="12"),
                            h("line", x1="4.22", y1="19.78", x2="5.64", y2="18.36"),
                            h("line", x1="18.36", y1="5.64", x2="19.78", y2="4.22"),
                        ),
                        h("svg",
                          klass="theme-toggle-moon",
                          xmlns="http://www.w3.org/2000/svg",
                          width="16",
                          height="16",
                          viewBox="0 0 24 24",
                          fill="none",
                          stroke="currentColor",
                          **{"stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round"}
                        )(
                            h("path", d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"),
                        ),
                    ),
                ),
            ),
            h("hgroup")(
                h(
                    "img",
                    klass="avatar",
                    src=f"img/{data.get('image')}",
                    alt="avatar",
                ),
                h("h1")(data.get("name")),
                h("p")(data.get("description")) if data.get("description") else None,
            ),
        )
    )

    footer = frag(
        h("footer", klass="container")(
            h("small")(
                " ", str(data.get("copyright_year", "2024")), " ", data.get("name"), ". All rights reserved. ",
                "Generated with ",
                h(
                    "a",
                    klass="",
                    href="https://github.com/thevahidal/jake/",
                    target="_blank",
                )("Jake"),
                "."
            ),
        ),
    )

    output = html(lang="en", data_theme=data.get("theme", "dark"))(
        head,
        h("body")(
            header,
            h("main", klass="container")(
                sections,
            ),
            footer,
        ),
    ).render()

    with open("dist/index.html", "w") as f:
        f.write(output)
