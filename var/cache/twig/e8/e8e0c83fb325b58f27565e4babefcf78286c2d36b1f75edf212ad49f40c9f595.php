<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_7b6cc1ee1e507853471fcc533209d15e409ebdef85ec820440fd222a9aebeaf8 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_73ca838d7fe0bec9f9e2041a8761e5f77aea19cdfbe713cc6c492c1b736fe5c6 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_73ca838d7fe0bec9f9e2041a8761e5f77aea19cdfbe713cc6c492c1b736fe5c6->enter($__internal_73ca838d7fe0bec9f9e2041a8761e5f77aea19cdfbe713cc6c492c1b736fe5c6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $__internal_6b1d0878f918d102e3da7859dd8aeedef28c3c8d866fe2ca84dfc00942fe3fad = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_6b1d0878f918d102e3da7859dd8aeedef28c3c8d866fe2ca84dfc00942fe3fad->enter($__internal_6b1d0878f918d102e3da7859dd8aeedef28c3c8d866fe2ca84dfc00942fe3fad_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_73ca838d7fe0bec9f9e2041a8761e5f77aea19cdfbe713cc6c492c1b736fe5c6->leave($__internal_73ca838d7fe0bec9f9e2041a8761e5f77aea19cdfbe713cc6c492c1b736fe5c6_prof);

        
        $__internal_6b1d0878f918d102e3da7859dd8aeedef28c3c8d866fe2ca84dfc00942fe3fad->leave($__internal_6b1d0878f918d102e3da7859dd8aeedef28c3c8d866fe2ca84dfc00942fe3fad_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_5fa033a89a3cc16b4a57b35d3cab32d42fc719f08b84750c2ac6e20807d38600 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_5fa033a89a3cc16b4a57b35d3cab32d42fc719f08b84750c2ac6e20807d38600->enter($__internal_5fa033a89a3cc16b4a57b35d3cab32d42fc719f08b84750c2ac6e20807d38600_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_2e9803f6393ae4118dc8cfaccf4a34c939336662bcdf4b253b6c597e2dff8b8f = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_2e9803f6393ae4118dc8cfaccf4a34c939336662bcdf4b253b6c597e2dff8b8f->enter($__internal_2e9803f6393ae4118dc8cfaccf4a34c939336662bcdf4b253b6c597e2dff8b8f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_2e9803f6393ae4118dc8cfaccf4a34c939336662bcdf4b253b6c597e2dff8b8f->leave($__internal_2e9803f6393ae4118dc8cfaccf4a34c939336662bcdf4b253b6c597e2dff8b8f_prof);

        
        $__internal_5fa033a89a3cc16b4a57b35d3cab32d42fc719f08b84750c2ac6e20807d38600->leave($__internal_5fa033a89a3cc16b4a57b35d3cab32d42fc719f08b84750c2ac6e20807d38600_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_e8ef46e5ade683b8434b60a962bec2a3ba2bc087be7df42f15946c000d54feb7 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_e8ef46e5ade683b8434b60a962bec2a3ba2bc087be7df42f15946c000d54feb7->enter($__internal_e8ef46e5ade683b8434b60a962bec2a3ba2bc087be7df42f15946c000d54feb7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_0ca990ad07d8ff05dfe611b252bbef16164b0ca0f53c7ddd8d53acf1906f28ae = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_0ca990ad07d8ff05dfe611b252bbef16164b0ca0f53c7ddd8d53acf1906f28ae->enter($__internal_0ca990ad07d8ff05dfe611b252bbef16164b0ca0f53c7ddd8d53acf1906f28ae_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_0ca990ad07d8ff05dfe611b252bbef16164b0ca0f53c7ddd8d53acf1906f28ae->leave($__internal_0ca990ad07d8ff05dfe611b252bbef16164b0ca0f53c7ddd8d53acf1906f28ae_prof);

        
        $__internal_e8ef46e5ade683b8434b60a962bec2a3ba2bc087be7df42f15946c000d54feb7->leave($__internal_e8ef46e5ade683b8434b60a962bec2a3ba2bc087be7df42f15946c000d54feb7_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_4c571923ce86b210936bdfdb2b7d5478f20affe4164efb01f1523934b8461487 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_4c571923ce86b210936bdfdb2b7d5478f20affe4164efb01f1523934b8461487->enter($__internal_4c571923ce86b210936bdfdb2b7d5478f20affe4164efb01f1523934b8461487_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_39986097fede3845d9e72be3d6c1eac383543853fcffc2be2c82587e55c46716 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_39986097fede3845d9e72be3d6c1eac383543853fcffc2be2c82587e55c46716->enter($__internal_39986097fede3845d9e72be3d6c1eac383543853fcffc2be2c82587e55c46716_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_router", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_39986097fede3845d9e72be3d6c1eac383543853fcffc2be2c82587e55c46716->leave($__internal_39986097fede3845d9e72be3d6c1eac383543853fcffc2be2c82587e55c46716_prof);

        
        $__internal_4c571923ce86b210936bdfdb2b7d5478f20affe4164efb01f1523934b8461487->leave($__internal_4c571923ce86b210936bdfdb2b7d5478f20affe4164efb01f1523934b8461487_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 13,  85 => 12,  71 => 7,  68 => 6,  59 => 5,  42 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block toolbar %}{% endblock %}

{% block menu %}
<span class=\"label\">
    <span class=\"icon\">{{ include('@WebProfiler/Icon/router.svg') }}</span>
    <strong>Routing</strong>
</span>
{% endblock %}

{% block panel %}
    {{ render(path('_profiler_router', { token: token })) }}
{% endblock %}
", "@WebProfiler/Collector/router.html.twig", "/var/www/html/vendor/symfony/web-profiler-bundle/Resources/views/Collector/router.html.twig");
    }
}
