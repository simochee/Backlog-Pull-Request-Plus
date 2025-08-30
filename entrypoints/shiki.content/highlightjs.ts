import hljs from "highlight.js/lib/core";
import lang_1c from "highlight.js/lib/languages/1c";
import lang_abnf from "highlight.js/lib/languages/abnf";
import lang_accesslog from "highlight.js/lib/languages/accesslog";
import lang_actionscript from "highlight.js/lib/languages/actionscript";
import lang_ada from "highlight.js/lib/languages/ada";
import lang_angelscript from "highlight.js/lib/languages/angelscript";
import lang_apache from "highlight.js/lib/languages/apache";
import lang_applescript from "highlight.js/lib/languages/applescript";
import lang_arcade from "highlight.js/lib/languages/arcade";
import lang_arduino from "highlight.js/lib/languages/arduino";
import lang_armasm from "highlight.js/lib/languages/armasm";
import lang_asciidoc from "highlight.js/lib/languages/asciidoc";
import lang_aspectj from "highlight.js/lib/languages/aspectj";
import lang_autohotkey from "highlight.js/lib/languages/autohotkey";
import lang_autoit from "highlight.js/lib/languages/autoit";
import lang_avrasm from "highlight.js/lib/languages/avrasm";
import lang_awk from "highlight.js/lib/languages/awk";
import lang_axapta from "highlight.js/lib/languages/axapta";
import lang_bash from "highlight.js/lib/languages/bash";
import lang_basic from "highlight.js/lib/languages/basic";
import lang_bnf from "highlight.js/lib/languages/bnf";
import lang_brainfuck from "highlight.js/lib/languages/brainfuck";
import lang_c from "highlight.js/lib/languages/c";
import lang_cal from "highlight.js/lib/languages/cal";
import lang_capnproto from "highlight.js/lib/languages/capnproto";
import lang_ceylon from "highlight.js/lib/languages/ceylon";
import lang_clean from "highlight.js/lib/languages/clean";
import lang_clojure from "highlight.js/lib/languages/clojure";
import lang_clojureRepl from "highlight.js/lib/languages/clojure-repl";
import lang_cmake from "highlight.js/lib/languages/cmake";
import lang_coffeescript from "highlight.js/lib/languages/coffeescript";
import lang_coq from "highlight.js/lib/languages/coq";
import lang_cos from "highlight.js/lib/languages/cos";
import lang_cpp from "highlight.js/lib/languages/cpp";
import lang_crmsh from "highlight.js/lib/languages/crmsh";
import lang_crystal from "highlight.js/lib/languages/crystal";
import lang_csharp from "highlight.js/lib/languages/csharp";
import lang_csp from "highlight.js/lib/languages/csp";
import lang_css from "highlight.js/lib/languages/css";
import lang_d from "highlight.js/lib/languages/d";
import lang_dart from "highlight.js/lib/languages/dart";
import lang_delphi from "highlight.js/lib/languages/delphi";
import lang_diff from "highlight.js/lib/languages/diff";
import lang_django from "highlight.js/lib/languages/django";
import lang_dns from "highlight.js/lib/languages/dns";
import lang_dockerfile from "highlight.js/lib/languages/dockerfile";
import lang_dos from "highlight.js/lib/languages/dos";
import lang_dsconfig from "highlight.js/lib/languages/dsconfig";
import lang_dts from "highlight.js/lib/languages/dts";
import lang_dust from "highlight.js/lib/languages/dust";
import lang_ebnf from "highlight.js/lib/languages/ebnf";
import lang_elixir from "highlight.js/lib/languages/elixir";
import lang_elm from "highlight.js/lib/languages/elm";
import lang_erb from "highlight.js/lib/languages/erb";
import lang_erlang from "highlight.js/lib/languages/erlang";
import lang_erlangRepl from "highlight.js/lib/languages/erlang-repl";
import lang_excel from "highlight.js/lib/languages/excel";
import lang_fix from "highlight.js/lib/languages/fix";
import lang_flix from "highlight.js/lib/languages/flix";
import lang_fortran from "highlight.js/lib/languages/fortran";
import lang_fsharp from "highlight.js/lib/languages/fsharp";
import lang_gams from "highlight.js/lib/languages/gams";
import lang_gauss from "highlight.js/lib/languages/gauss";
import lang_gcode from "highlight.js/lib/languages/gcode";
import lang_gherkin from "highlight.js/lib/languages/gherkin";
import lang_glsl from "highlight.js/lib/languages/glsl";
import lang_gml from "highlight.js/lib/languages/gml";
import lang_go from "highlight.js/lib/languages/go";
import lang_golo from "highlight.js/lib/languages/golo";
import lang_gradle from "highlight.js/lib/languages/gradle";
import lang_graphql from "highlight.js/lib/languages/graphql";
import lang_groovy from "highlight.js/lib/languages/groovy";
import lang_haml from "highlight.js/lib/languages/haml";
import lang_handlebars from "highlight.js/lib/languages/handlebars";
import lang_haskell from "highlight.js/lib/languages/haskell";
import lang_haxe from "highlight.js/lib/languages/haxe";
import lang_hsp from "highlight.js/lib/languages/hsp";
import lang_http from "highlight.js/lib/languages/http";
import lang_hy from "highlight.js/lib/languages/hy";
import lang_inform7 from "highlight.js/lib/languages/inform7";
import lang_ini from "highlight.js/lib/languages/ini";
import lang_irpf90 from "highlight.js/lib/languages/irpf90";
import lang_isbl from "highlight.js/lib/languages/isbl";
import lang_java from "highlight.js/lib/languages/java";
import lang_javascript from "highlight.js/lib/languages/javascript";
import lang_jbossCli from "highlight.js/lib/languages/jboss-cli";
import lang_json from "highlight.js/lib/languages/json";
import lang_julia from "highlight.js/lib/languages/julia";
import lang_juliaRepl from "highlight.js/lib/languages/julia-repl";
import lang_kotlin from "highlight.js/lib/languages/kotlin";
import lang_lasso from "highlight.js/lib/languages/lasso";
import lang_latex from "highlight.js/lib/languages/latex";
import lang_ldif from "highlight.js/lib/languages/ldif";
import lang_leaf from "highlight.js/lib/languages/leaf";
import lang_less from "highlight.js/lib/languages/less";
import lang_lisp from "highlight.js/lib/languages/lisp";
import lang_livecodeserver from "highlight.js/lib/languages/livecodeserver";
import lang_livescript from "highlight.js/lib/languages/livescript";
import lang_llvm from "highlight.js/lib/languages/llvm";
import lang_lsl from "highlight.js/lib/languages/lsl";
import lang_lua from "highlight.js/lib/languages/lua";
import lang_makefile from "highlight.js/lib/languages/makefile";
import lang_markdown from "highlight.js/lib/languages/markdown";
import lang_mathematica from "highlight.js/lib/languages/mathematica";
import lang_matlab from "highlight.js/lib/languages/matlab";
import lang_maxima from "highlight.js/lib/languages/maxima";
import lang_mel from "highlight.js/lib/languages/mel";
import lang_mercury from "highlight.js/lib/languages/mercury";
import lang_mipsasm from "highlight.js/lib/languages/mipsasm";
import lang_mizar from "highlight.js/lib/languages/mizar";
import lang_mojolicious from "highlight.js/lib/languages/mojolicious";
import lang_monkey from "highlight.js/lib/languages/monkey";
import lang_moonscript from "highlight.js/lib/languages/moonscript";
import lang_n1ql from "highlight.js/lib/languages/n1ql";
import lang_nestedtext from "highlight.js/lib/languages/nestedtext";
import lang_nginx from "highlight.js/lib/languages/nginx";
import lang_nim from "highlight.js/lib/languages/nim";
import lang_nix from "highlight.js/lib/languages/nix";
import lang_nodeRepl from "highlight.js/lib/languages/node-repl";
import lang_nsis from "highlight.js/lib/languages/nsis";
import lang_objectivec from "highlight.js/lib/languages/objectivec";
import lang_ocaml from "highlight.js/lib/languages/ocaml";
import lang_openscad from "highlight.js/lib/languages/openscad";
import lang_oxygene from "highlight.js/lib/languages/oxygene";
import lang_parser3 from "highlight.js/lib/languages/parser3";
import lang_perl from "highlight.js/lib/languages/perl";
import lang_pf from "highlight.js/lib/languages/pf";
import lang_pgsql from "highlight.js/lib/languages/pgsql";
import lang_php from "highlight.js/lib/languages/php";
import lang_phpTemplate from "highlight.js/lib/languages/php-template";
import lang_plaintext from "highlight.js/lib/languages/plaintext";
import lang_pony from "highlight.js/lib/languages/pony";
import lang_powershell from "highlight.js/lib/languages/powershell";
import lang_processing from "highlight.js/lib/languages/processing";
import lang_profile from "highlight.js/lib/languages/profile";
import lang_prolog from "highlight.js/lib/languages/prolog";
import lang_properties from "highlight.js/lib/languages/properties";
import lang_protobuf from "highlight.js/lib/languages/protobuf";
import lang_puppet from "highlight.js/lib/languages/puppet";
import lang_purebasic from "highlight.js/lib/languages/purebasic";
import lang_python from "highlight.js/lib/languages/python";
import lang_pythonRepl from "highlight.js/lib/languages/python-repl";
import lang_q from "highlight.js/lib/languages/q";
import lang_qml from "highlight.js/lib/languages/qml";
import lang_r from "highlight.js/lib/languages/r";
import lang_reasonml from "highlight.js/lib/languages/reasonml";
import lang_rib from "highlight.js/lib/languages/rib";
import lang_roboconf from "highlight.js/lib/languages/roboconf";
import lang_routeros from "highlight.js/lib/languages/routeros";
import lang_rsl from "highlight.js/lib/languages/rsl";
import lang_ruby from "highlight.js/lib/languages/ruby";
import lang_ruleslanguage from "highlight.js/lib/languages/ruleslanguage";
import lang_rust from "highlight.js/lib/languages/rust";
import lang_sas from "highlight.js/lib/languages/sas";
import lang_scala from "highlight.js/lib/languages/scala";
import lang_scheme from "highlight.js/lib/languages/scheme";
import lang_scilab from "highlight.js/lib/languages/scilab";
import lang_scss from "highlight.js/lib/languages/scss";
import lang_shell from "highlight.js/lib/languages/shell";
import lang_smali from "highlight.js/lib/languages/smali";
import lang_smalltalk from "highlight.js/lib/languages/smalltalk";
import lang_sml from "highlight.js/lib/languages/sml";
import lang_sqf from "highlight.js/lib/languages/sqf";
import lang_sql from "highlight.js/lib/languages/sql";
import lang_stan from "highlight.js/lib/languages/stan";
import lang_stata from "highlight.js/lib/languages/stata";
import lang_step21 from "highlight.js/lib/languages/step21";
import lang_stylus from "highlight.js/lib/languages/stylus";
import lang_subunit from "highlight.js/lib/languages/subunit";
import lang_swift from "highlight.js/lib/languages/swift";
import lang_taggerscript from "highlight.js/lib/languages/taggerscript";
import lang_tap from "highlight.js/lib/languages/tap";
import lang_tcl from "highlight.js/lib/languages/tcl";
import lang_thrift from "highlight.js/lib/languages/thrift";
import lang_tp from "highlight.js/lib/languages/tp";
import lang_twig from "highlight.js/lib/languages/twig";
import lang_typescript from "highlight.js/lib/languages/typescript";
import lang_vala from "highlight.js/lib/languages/vala";
import lang_vbnet from "highlight.js/lib/languages/vbnet";
import lang_vbscript from "highlight.js/lib/languages/vbscript";
import lang_vbscriptHtml from "highlight.js/lib/languages/vbscript-html";
import lang_verilog from "highlight.js/lib/languages/verilog";
import lang_vhdl from "highlight.js/lib/languages/vhdl";
import lang_vim from "highlight.js/lib/languages/vim";
import lang_wasm from "highlight.js/lib/languages/wasm";
import lang_wren from "highlight.js/lib/languages/wren";
import lang_x86asm from "highlight.js/lib/languages/x86asm";
import lang_xl from "highlight.js/lib/languages/xl";
import lang_xml from "highlight.js/lib/languages/xml";
import lang_xquery from "highlight.js/lib/languages/xquery";
import lang_yaml from "highlight.js/lib/languages/yaml";
import lang_zephir from "highlight.js/lib/languages/zephir";

const ALL_LANGUAGES = {
	"1c": lang_1c,
	abnf: lang_abnf,
	accesslog: lang_accesslog,
	actionscript: lang_actionscript,
	ada: lang_ada,
	angelscript: lang_angelscript,
	apache: lang_apache,
	applescript: lang_applescript,
	arcade: lang_arcade,
	arduino: lang_arduino,
	armasm: lang_armasm,
	asciidoc: lang_asciidoc,
	aspectj: lang_aspectj,
	autohotkey: lang_autohotkey,
	autoit: lang_autoit,
	avrasm: lang_avrasm,
	awk: lang_awk,
	axapta: lang_axapta,
	bash: lang_bash,
	basic: lang_basic,
	bnf: lang_bnf,
	brainfuck: lang_brainfuck,
	c: lang_c,
	cal: lang_cal,
	capnproto: lang_capnproto,
	ceylon: lang_ceylon,
	clean: lang_clean,
	"clojure-repl": lang_clojureRepl,
	clojure: lang_clojure,
	cmake: lang_cmake,
	coffeescript: lang_coffeescript,
	coq: lang_coq,
	cos: lang_cos,
	cpp: lang_cpp,
	crmsh: lang_crmsh,
	crystal: lang_crystal,
	csharp: lang_csharp,
	csp: lang_csp,
	css: lang_css,
	d: lang_d,
	dart: lang_dart,
	delphi: lang_delphi,
	diff: lang_diff,
	django: lang_django,
	dns: lang_dns,
	dockerfile: lang_dockerfile,
	dos: lang_dos,
	dsconfig: lang_dsconfig,
	dts: lang_dts,
	dust: lang_dust,
	ebnf: lang_ebnf,
	elixir: lang_elixir,
	elm: lang_elm,
	erb: lang_erb,
	"erlang-repl": lang_erlangRepl,
	erlang: lang_erlang,
	excel: lang_excel,
	fix: lang_fix,
	flix: lang_flix,
	fortran: lang_fortran,
	fsharp: lang_fsharp,
	gams: lang_gams,
	gauss: lang_gauss,
	gcode: lang_gcode,
	gherkin: lang_gherkin,
	glsl: lang_glsl,
	gml: lang_gml,
	go: lang_go,
	golo: lang_golo,
	gradle: lang_gradle,
	graphql: lang_graphql,
	groovy: lang_groovy,
	haml: lang_haml,
	handlebars: lang_handlebars,
	haskell: lang_haskell,
	haxe: lang_haxe,
	hsp: lang_hsp,
	http: lang_http,
	hy: lang_hy,
	inform7: lang_inform7,
	ini: lang_ini,
	irpf90: lang_irpf90,
	isbl: lang_isbl,
	java: lang_java,
	javascript: lang_javascript,
	"jboss-cli": lang_jbossCli,
	json: lang_json,
	"julia-repl": lang_juliaRepl,
	julia: lang_julia,
	kotlin: lang_kotlin,
	lasso: lang_lasso,
	latex: lang_latex,
	ldif: lang_ldif,
	leaf: lang_leaf,
	less: lang_less,
	lisp: lang_lisp,
	livecodeserver: lang_livecodeserver,
	livescript: lang_livescript,
	llvm: lang_llvm,
	lsl: lang_lsl,
	lua: lang_lua,
	makefile: lang_makefile,
	markdown: lang_markdown,
	mathematica: lang_mathematica,
	matlab: lang_matlab,
	maxima: lang_maxima,
	mel: lang_mel,
	mercury: lang_mercury,
	mipsasm: lang_mipsasm,
	mizar: lang_mizar,
	mojolicious: lang_mojolicious,
	monkey: lang_monkey,
	moonscript: lang_moonscript,
	n1ql: lang_n1ql,
	nestedtext: lang_nestedtext,
	nginx: lang_nginx,
	nim: lang_nim,
	nix: lang_nix,
	"node-repl": lang_nodeRepl,
	nsis: lang_nsis,
	objectivec: lang_objectivec,
	ocaml: lang_ocaml,
	openscad: lang_openscad,
	oxygene: lang_oxygene,
	parser3: lang_parser3,
	perl: lang_perl,
	pf: lang_pf,
	pgsql: lang_pgsql,
	"php-template": lang_phpTemplate,
	php: lang_php,
	plaintext: lang_plaintext,
	pony: lang_pony,
	powershell: lang_powershell,
	processing: lang_processing,
	profile: lang_profile,
	prolog: lang_prolog,
	properties: lang_properties,
	protobuf: lang_protobuf,
	puppet: lang_puppet,
	purebasic: lang_purebasic,
	"python-repl": lang_pythonRepl,
	python: lang_python,
	q: lang_q,
	qml: lang_qml,
	r: lang_r,
	reasonml: lang_reasonml,
	rib: lang_rib,
	roboconf: lang_roboconf,
	routeros: lang_routeros,
	rsl: lang_rsl,
	ruby: lang_ruby,
	ruleslanguage: lang_ruleslanguage,
	rust: lang_rust,
	sas: lang_sas,
	scala: lang_scala,
	scheme: lang_scheme,
	scilab: lang_scilab,
	scss: lang_scss,
	shell: lang_shell,
	smali: lang_smali,
	smalltalk: lang_smalltalk,
	sml: lang_sml,
	sqf: lang_sqf,
	sql: lang_sql,
	stan: lang_stan,
	stata: lang_stata,
	step21: lang_step21,
	stylus: lang_stylus,
	subunit: lang_subunit,
	swift: lang_swift,
	taggerscript: lang_taggerscript,
	tap: lang_tap,
	tcl: lang_tcl,
	thrift: lang_thrift,
	tp: lang_tp,
	twig: lang_twig,
	typescript: lang_typescript,
	vala: lang_vala,
	vbnet: lang_vbnet,
	"vbscript-html": lang_vbscriptHtml,
	vbscript: lang_vbscript,
	verilog: lang_verilog,
	vhdl: lang_vhdl,
	vim: lang_vim,
	wasm: lang_wasm,
	wren: lang_wren,
	x86asm: lang_x86asm,
	xl: lang_xl,
	xml: lang_xml,
	xquery: lang_xquery,
	yaml: lang_yaml,
	zephir: lang_zephir,
};

const SUPPORTED_LANGUAGE_NAMES = Object.values(ALL_LANGUAGES)
	.map((lang) => lang(hljs))
	.flatMap(({ name, aliases = [] }) => [name, ...aliases])
	.filter((name) => name != null)
	.map((name) => name.toLowerCase());

export const checkLanguageSupport = (input: string): boolean => {
	return SUPPORTED_LANGUAGE_NAMES.includes(input.toLowerCase());
};

export const loadAllLanguages = async () => {
	for (const [id, lang] of Object.entries(ALL_LANGUAGES)) {
		hljs.registerLanguage(id, lang);
	}
};
