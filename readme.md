=============================
#Project Details
=============================

	Project Name: 
	Date Commence:
	Repository URL: https://XXXXX@bitbucket.org/commude_git/REPLACED.git
	Trello URL: 
	Director: 

=============================
#101 for New Project (Remove this, once existing)
=============================
1. Read details on readme.md
2. Set Site name and SEO(if needed) on includes/settings.pug
3. Use compiler as COMPACT
4. Set .htaccess and htpasswd (Set REPLACED to actual details)

=============================
#Features
=============================

	*BEM Compliant
	*SCSS(SASS)
	*PUGJS
	*CSS Design inspired by 
	Bootstrap class naming 
	convention

=============================
##Developers
=============================

	NAME HERE

=============================
#TASK
=============================
	
	TODO ITEM:
	FEATURE ADDED: 

=============================
#Class Structure
=============================



=============================
#Coding Rules
=============================

	* Using Prepos, for SCSS
		Set to COMPACT mode

	* Using Terminal/Prompt
		1. Navigate towards Projects Folder >> html >> assets
		2. Type: sass --watch scss:css --no-cache --style compact

	* CSS Use the Structure hierarchy
		border
	 	margin
	 	padding
		width
		height
		display
		position
			top 
			right 
			bottom 
			left 
		background values
		color
		font values

	* Segregate or Place specific css rules to each file.
		* header > _header.scss
		* footer > _header.scss
		* common > _common.scss (Universal rules for all pages or components)
		* top > _top.scss (For first page in the hirearchy)
		* main > main.scss (For importing additional scss files)

	* ID or CLASS naming
		* Use lower case only

		* Use __ when creating class names
			.hello__good__morning
			#my__name__is

		* Use -- when creating modifiers
			&.txt--c
			&.color--blue
			&.content--circle

	* URL Path usage
		* ./../index.html
		* ./index.html
		
	* Use shorthand values whenever possible.
		* Font (Always use the complete set)
			* > font: 500 10px/1.2 $fontFamily 
		* Background
			* > background: center / cover no-repeat url('./../image.png')
		* Margin
			* > margin: 0px 0px 0px 0px

	* Space between parenthesis and space for improved readability.
		element__1 { }
		<SPACE>
		element__2<SPACE>{ }
		<TABSPACE>
			element__3<SPACE>{ }

	* BEM Compliant
	* All tags should have class names for easy maintainability.
	* Use a maximum of 1.00 decimal spaces for digit values.
	* All colours, styling or fonts should be place at the base.scss
	* Measurements should be checked through the Browser Ruler.
	* For Box shadow, backgrounds with or without opacity use rgba() format for cross browser compatibility.
	* Use the image naming convention 
		* [pagename]_[typeofimage]_[01~].png or jpg
			Optional [typeofimage]: 
			bg 　Image used in background
			btn Image used with btn button
			ico Image used with ico icon
			banner banner image
			tit heading image
			txt On design, text to be imaged
			thumb Image used in thumbnail
			pic Photos and illustrations
	* Font styling or colours should be done on the inner text tags (<h1>-<h6>,<p>, and so on..) 
		Avoid placing them on containers.